import { useForm } from "react-hook-form"
import { useAuth } from "../../context/AuthContext"
import SubmitBtn from "../SubmitBtn"
import { toast } from 'sonner'
import { addComment, updateComment } from "../../supabase/data"
import { useEffect } from "react"

export default function CommentForm({commentToEdit, update, setUpdating=() => {}}) {
    const {register, handleSubmit, reset, setValue, formState: {isSubmitSuccessful}} = useForm()
    const {user} = useAuth()

    useEffect(() => {
        if (commentToEdit) {
            setValue('comment', commentToEdit.text)
        }
    },[commentToEdit, setValue])

    const onSubmit = handleSubmit(async (data) => {
        let commentData = {
            id: commentToEdit ? commentToEdit.id : null,
            userID: user.id,
            userName: user.full_name,
            text: data.comment,
            plan : 0
        };
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