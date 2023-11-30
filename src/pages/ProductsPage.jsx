import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { fetchComments, fetchPlanes } from "../supabase/data";
import { Toaster } from "sonner";
import { NavLink } from "react-router-dom";
import CommentsBox from "../components/comments/CommentsBox";
import CommentForm from "../components/comments/CommentForm";
import LoginForm from "../components/authForms/LoginForm";
import Modal from "../components/comments/Modal";
import PlanCard from "../components/Cards/PlanCard";

export default function ProductsPage() {
  const [comments, setComments] = useState([]); // estado que almacena los comentarios
  const [modalOpen, setModalOpen] = useState(false); // estado que controla el modal
  const [planes, setPlanes] = useState([]); // estado que almacena los planes
  const { isAuth } = useAuth(); // traemos el usuario

// se define la funcion afuera del useEffect para poderla pasar como prompt
  const getComments = async () => {
    try {
      const res = await fetchComments();
      setComments(res);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    async function getPlanes(){
      try{
        const planes = await fetchPlanes();
        setPlanes(planes);
      } catch(error){
        console.error(error);
      }
    }
    getComments();
    // se llama aparte pq no se puede usar async dentro del useEffect
    getPlanes();
  }, []);
  // control del modal
  const handleSubmit = () => {
    setModalOpen(true);
  };

  return (
    <main className="md:m-4 flex gap-2 flex-col md:max-w-7xl mx-6 justify-center lg:mx-auto">
      <h1 className="text-4xl py-2">Nuestros Productos</h1>
      <section className="bg-teal-800 rounded-md">
        <ul className="grid md:grid-cols-3 grid-cols-1 my-4">
          {/* para cada plan, se genera una tarjeta */}
          {planes.map((plan) => (
            <PlanCard key={plan.id} plan={plan}/>
          ))}
        </ul>
      </section>
      <button
        onClick={handleSubmit}
        className="bg-teal-800 md:py-2 md:px-4 py-1 px-3 hover:bg-teal-900 text-white rounded"
      >
        Agregar Comentario
      </button>
      <CommentsBox data={comments} update={() => getComments()} />
      {/* control del modal, en caso de que el usuario no este autenticado mostrara el formulario para iniciar sesion y luego el formulario para crear un comentario */}
      {modalOpen && (
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
          {isAuth ? (
            <>
              <h1 className="text-2xl py-2">Agrega Tu Comentario</h1>
              <CommentForm update={() => getComments()}/>
            </>
          ) : (
            <>
              <h1 className="text-2xl py-2">Es necesario iniciar sesion</h1>
              <LoginForm />
              <p className="my-2">
                No tienes cuenta?
                <NavLink
                  className= 'underline mx-2 hover:font-bold'
                  to="/login"
                >
                  Registrate
                </NavLink>
              </p>
            </>
          )}
        </Modal>
      )}
      <Toaster position="top-center" richColors duration={2000} />
    </main>
  );
}