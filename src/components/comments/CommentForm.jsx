import { useForm } from "react-hook-form"
import supabase from "../../supabase/client"
import { useAuth } from "../../context/AuthContext"
import SubmitBtn from "../SubmitBtn"
export default function CommentForm() {
    const {register, handleSubmit} = useForm()
    const {user} = useAuth()
    const onSubmit = handleSubmit(async (data) => {
        try {
            const res = await supabase.from("comments").insert({
                userID: user.id,
                text: data.comment,
                userName: user.full_name,
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
    <div className="">
        <form
        className="flex flex-col gap-2"
        onSubmit={onSubmit}>
            <textarea className="p-4" placeholder="comment" {...register("comment")} />
            <SubmitBtn/>
        </form>
    </div>
  )
}