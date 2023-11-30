import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { fetchComments, fetchPlanes } from "../supabase/auth";
import CommentsBox from "../components/comments/CommentsBox";
import CommentForm from "../components/comments/CommentForm";
import LoginForm from "../components/authForms/LoginForm";
import Modal from "../components/comments/Modal";
import { NavLink } from "react-router-dom";
import PlanCard from "../components/Cards/PlanCard";

export default function ProductsPage() {
  const [comments, setComments] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [planes, setPlanes] = useState([]);
  const { isAuth } = useAuth();

  useEffect(() => {
    async function getComments() {
      try {
        const comments = await fetchComments();
        setComments(comments);
      } catch (error) {
        console.error(error);
      }
    }
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
    <main className="m-4 flex gap-2 flex-col max-w-7xl justify-center mx-auto">
      <h1 className="text-4xl py-2">Nuestros Productos</h1>
      <section className="bg-teal-800 rounded-md">
        <ul className="flex flex-row my-4">
          {planes.map((plan) => (
            <PlanCard key={plan.id} plan={plan}/>
          ))}
        </ul>
      </section>
      <button
        onClick={handleSubmit}
        className="bg-teal-800 md:py-2 md:px-4 py-1 px-3 hover:bg-onahau-600 text-white rounded"
      >
        Agregar Comentario
      </button>
      <CommentsBox data={comments} />
      {modalOpen && (
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
          {isAuth ? (
            <>
              <h1 className="text-2xl">Agrega Tu Comentario</h1>
              <CommentForm />
            </>
          ) : (
            <>
              <h1 className="text-2xl">Es necesario iniciar sesion</h1>
              <LoginForm />
              <p>
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
    </main>
  );
}
