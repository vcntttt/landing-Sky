import { useForm } from "react-hook-form"
import supabase from "../supabase/client"
import { useAuth } from "../context/AuthContext"

export default function CommentForm() {
    const {register, handleSubmit} = useForm()
    const {user} = useAuth()
    const onSubmit = handleSubmit(async (data) => {
        try {
            const res = await supabase.from("comments").insert({
                userID: user.id,
                text: data.comment,
                userName: 'pepe',
                plan : 0 
                // plan : 0 => comentario general
                // plan : 1 => comentario de plan 1
                // plan : 2 => comentario de plan 2
                // plan : 3 => comentario de plan 3  
            })
            console.log(res)
        } catch (error) {
            console.error(error)
        }
    })
  return (
    <div>
        <form onSubmit={onSubmit}>
            <textarea placeholder="comment" {...register("comment")} />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}