import { useForm } from "react-hook-form";
import client from '../supabase/client'
import { Toaster, toast } from "sonner";
export default function LoginPage() {
    const { register, handleSubmit} = useForm();

    const onLoginSubmit = handleSubmit( async (data) => {
        console.log(data)
        try {
            const res = await client.auth.signInWithPassword({
                email: data.email,
                password: data.password
            })
            console.log(res)
        } catch (error) {
            console.error(error)
        }
    })

    const onRegisterSubmit = handleSubmit( async (data) => {
        console.log(data)
        try {
            const res = await client.auth.signUp({
                email: data.email,
                password: data.password
            })
            console.log(res)
        } catch (error) {
            toast.error(error.error)
            console.error(error)
        }
    })
  return (
            <main className="p-6 grid md:grid-cols-2 grid-cols-1 gap-6">
                <section>
                <h1 className="text-center text-[40px] font-normal text-white">Iniciar Sesión</h1>
                <form onSubmit={onLoginSubmit} className="flex flex-col  gap-2 mx-auto mt-16 mb-20 [&>input]:p-4 [&>input]:rounded">
                    <input type="email" placeholder="ejemplo@email.com" {...register("email", {required: true})} />
                    <input type="password" placeholder="Contraseña" {...register("password", {required: true})}/>
                    <button type="submit">Enviar</button>
                </form>
                </section>
                <section>
                <h1 className="text-center text-[40px] font-normal text-white">Registrarse</h1>
                <form onSubmit={onRegisterSubmit} className="flex flex-col  gap-2 mx-auto mt-16 mb-20 [&>input]:p-4 [&>input]:rounded">
                    <input type="email" placeholder="ejemplo@email.com" {...register("email", {required: true})} />
                    <input type="password" placeholder="Contraseña" {...register("password", {required: true})}/>
                    <button type="submit">Enviar</button>
                </form>
                </section>
                <Toaster position="top-center" reverseOrder={false} />
            </main>
  )
}