import { useForm } from "react-hook-form"
import { useAuth } from "../../context/AuthContext"
import SubmitBtn from "../SubmitBtn"
import { toast } from 'sonner'
import { addComment, updateComment } from "../../supabase/data"
import { useEffect } from "react"

export default function CommentForm({commentToEdit, update, setUpdating=() => {}}) {
    //implementacion de react hook form
    const {register, handleSubmit, reset, setValue, formState: {isSubmitSuccessful}} = useForm()
    const {user} = useAuth()
    // se toma el valor del comentario y se guarda en el estado
    useEffect(() => {
        if (commentToEdit) {
            setValue('comment', commentToEdit.text)
        }
    },[commentToEdit, setValue])

    const onSubmit = handleSubmit(async (data) => {
        // preparamos el objeto que se envia a supabase
        let commentData = {
            id: commentToEdit ? commentToEdit.id : null,
            userID: user.id,
            userName: user.full_name,
            text: data.comment,
            plan : 0
        };
        // logica para editar o agregar un comentario
            if (commentToEdit){
                toast.promise(updateComment(commentData), {
                    loading: 'Actualizando...',
                    success: () => {
                        update()
                        return 'Comentario actualizado'
                    },
                    error: "Error al actualizar"
                })
            } else {
                // sacamos la id pq no puede ser nulo
                if (!commentToEdit) {
                    commentData = {
                        userID: user.id,
                        userName: user.full_name,
                        text: data.comment,
                        plan : 0
                    }
                }
                toast.promise(addComment(commentData), {
                    loading: 'Agregando...',
                    success: () => {
                        update()
                        return 'Comentario agregado'
                    },
                    error: "Error al agregar"
                })
            }
    })
// reseteo del formulario
    useEffect(() => {
        if (isSubmitSuccessful) {
            reset()
            setUpdating(false)
        }
    }, [isSubmitSuccessful, reset])

  return (
        <form
        className="flex flex-col gap-8 mx-auto my-18 [&>input]:p-4 [&>input]:rounded"
        onSubmit={onSubmit}>
            <textarea className="p-4" placeholder="Excelente servicio" {...register("comment")} />
            <SubmitBtn/>
        </form>
  )
}