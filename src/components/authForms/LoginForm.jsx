import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { signInWithEmail } from "../../supabase/auth";
import { useAuth } from "../../context/AuthContext";
import SubmitBtn from "../SubmitBtn";

export default function LoginForm() {
  const { register, handleSubmit } = useForm();
  const { setAuth } = useAuth();

  const onLoginSubmit = handleSubmit(async (data) => {
    console.log(data);
    try {
      const res = await signInWithEmail({
        email: data.email,
        password: data.password,
      });
      toast.success("Iniciado con exito");
      if (res && res.data && res.data.user) {
        setAuth({ user: res.data.user, isAuth: true });
      }
    } catch (error) {
      setAuth({ user: null, isAuth: false });
      if (error.error && error.error.message) {
        toast.error(error.error.message);
      }
      toast.error("Error al iniciar sesión");
    }
  });
  
  return (
    <form
      onSubmit={onLoginSubmit}
      className="flex flex-col  gap-2 mx-auto mt-16 mb-20 [&>input]:p-4 [&>input]:rounded"
    >
      <input
        type="email"
        placeholder="ejemplo@email.com"
        {...register("email", { required: true })}
      />
      <input
        type="password"
        placeholder="Contraseña"
        {...register("password", { required: true })}
      />
      <SubmitBtn/>
    </form>
  );
}
