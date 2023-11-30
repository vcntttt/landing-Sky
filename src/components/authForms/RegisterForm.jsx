import { useForm } from "react-hook-form";
import { signUpWithEmail, updateProfile } from "../../supabase/auth";
import { toast } from "sonner";
import { useAuth } from "../../context/AuthContext";
import SubmitBtn from "../SubmitBtn";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  //Logica para registrar
  const { register, handleSubmit } = useForm(); //implementacion de react hook form
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const onRegisterSubmit = handleSubmit(async (data) => {
    console.log(data);
    try {
      //Peticion
      const res = await signUpWithEmail({
        email: data.email,
        password: data.password,
      });
      console.log(res);
      // Se pide guarda el nombre del usuario en una tabla aparte
      if (res) {
        const userData = res.data.user;
        const dataProfile = {
          id: userData.id,
          full_name: data.name,
        };
        // Peticion
        await updateProfile(dataProfile);
      }
      // Notificacion
      toast.success("Registrado con exito, hemos enviado un email para confirmar tu cuenta, una vez confirmada podras iniciar sesion :D");
      setTimeout(() => {
        navigate("/");
      }, 3500);
      if (res && res.data && res.data.user) {
        setAuth({ user: res.data.user, isAuth: true });
      }

    } catch (error) {
      setAuth({ user: null, isAuth: false });
      if (error.error.message) {
        toast.error(error.error.message);
      } else {
        toast.error("Error al registrarse");
      }
    }
  });
  return (
    <form
      onSubmit={onRegisterSubmit}
      className="flex flex-col gap-4 mx-auto my-18 [&>input]:p-4 [&>input]:rounded"
    >
      <input type="text" placeholder="Alberto..." {...register("name")} />
      <input
        type="email"
        placeholder="alberto@email.com"
        {...register("email")}
      />
      <input
        type="password"
        placeholder="Contraseña"
        {...register("password")}
      />
      <SubmitBtn/>
    </form>
  );
}
