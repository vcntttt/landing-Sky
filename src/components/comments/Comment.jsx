import { deleteComment } from "../../supabase/data"
import { useAuth } from "../../context/AuthContext"
import { toast } from "sonner"
import { useState } from "react"
import CommentForm from "./CommentForm"
import Modal from "./Modal"

export default function Comment({item, update}) {
  const {user} = useAuth() //traemos el usuario del contexto
  const [updating, setUpdating] = useState(false) // inicializacion de estado que controla el modal
  const [commentToEdit, setCommentToEdit] = useState('') // inicializacion de estado que tiene el mensaje a editar

  // logica para eliminar un comentario
  const handleDelete = async () => {
   try {
    toast.promise(deleteComment(item.id), {
      loading: 'Eliminando...',
      success: () => {
        update()
        return 'Comentario eliminado'
      },
      error: "Error al eliminar"
    })
   } catch (error) {
    console.error(error)
  }}
// logica para editar un comentario
  const handleUpdate = async () => {
    try {
      setUpdating(true)
      setCommentToEdit(item)
    } catch (error) {
     console.error(error) 
    }}

  return (
    <div className="bg-slate-800 p-4 rounded gap-2 w-full flex justify-between">
      <div className="flex flex-col">
        <p>{item.userName}</p>
        <p>{item.text}</p>
      </div>
      {/* logica para solo poder editar, eliminar comentarios que sean tuyos*/}
      {user?.id === item.userID && (
        <div className="flex gap-2">
          <button 
          onClick={handleUpdate}
          className="bg-blue-500 p-2 rounded">
            Editar</button>
          <button 
          onClick={handleDelete} 
          className="bg-red-500 p-2 rounded">X</button>
        </div>
      )}
      {/* si el estado es true, se muestra la ventana modal con el formulario para cambiar el comentario */}
      {updating && (
        <Modal isOpen={updating} onClose={() => setUpdating(false)}>
          <CommentForm commentToEdit={commentToEdit} update={update} setUpdating={setUpdating}/>
        </Modal>
      )}
    </div>
  )
}