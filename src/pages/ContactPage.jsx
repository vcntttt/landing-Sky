import { useForm } from "react-hook-form"
import { toast, Toaster} from "sonner";
import SubmitBtn from "../components/SubmitBtn";
import { useAuth } from "../context/AuthContext";
import { saveMsg } from "../supabase/data";

export default function ContactPage() {
  const {register, handleSubmit} = useForm()
  const {user} = useAuth()
// en caso de que no estes logeado no te deja mandar el mensaje a la db
  const onSubmit = handleSubmit((data) => {
    if (!user) {
      toast.error('Debes iniciar sesión')
      return
    }
      toast.promise(saveMsg(
        {
          text: data.msg,
          userID: user.id,
          userName: user.full_name
        }
      ), {
        loading: 'Enviando...',
        success: () => 'Mensaje enviado, pronto nos pondremos en contacto!',
        error: 'Error al enviar'
      })
  })
    return (
      <main className="m-4 flex gap-2 flex-col max-w-7xl justify-center mx-auto">
        <section id="contact" className="bg-slate-800 m-8 text-white p-6 rounded-md">
          <h1 className="text-2xl py-4">Contacto</h1>
            <form
        className="flex flex-col gap-8 mx-auto my-18 [&>input]:p-4 [&>input]:rounded"
        onSubmit={onSubmit}>
            <textarea className="p-4" placeholder="Buenas tardes..." {...register("msg")} />
            <SubmitBtn/>
        </form>
        </section>
        <Toaster richColors position="top-center" duration={3000}/>
      </main>
    )
  }
  