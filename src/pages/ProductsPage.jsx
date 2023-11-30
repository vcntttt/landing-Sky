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
  const [comments, setComments] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [planes, setPlanes] = useState([]);
  const { isAuth } = useAuth();

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
    getPlanes();
  }, []);

  const handleSubmit = () => {
    setModalOpen(true);
  };

  return (
    <main className="md:m-4 flex gap-2 flex-col md:max-w-7xl mx-6 justify-center lg:mx-auto">
      <h1 className="text-4xl py-2">Nuestros Productos</h1>
      <section className="bg-teal-800 rounded-md">
        <ul className="grid md:grid-cols-3 grid-cols-1 my-4">
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