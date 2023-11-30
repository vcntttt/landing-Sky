import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { signInWithEmail } from "../../supabase/auth";
import { useAuth } from "../../context/AuthContext";
import SubmitBtn from "../SubmitBtn";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  // Logica para iniciar sesion
  const { register, handleSubmit } = useForm(); //implementacion de react hook form
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  
  const onLoginSubmit = handleSubmit(async (data) => {
    console.log(data);
    try {
      // Peticion
      const res = await signInWithEmail({
        email: data.email,
        password: data.password,
      });
      // Notificacion
      toast.success("Iniciado con exito");
      // Redireccion
      setTimeout(() => {
        navigate("/");
      }, 1000);
      // Control de autenticacion
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
      className="flex flex-col gap-4 mx-auto my-18 [&>input]:p-4 [&>input]:rounded"
    >
      <input
        type="email"
        placeholder="alberto@email.com"
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
