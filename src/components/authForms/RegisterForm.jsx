import { useForm } from "react-hook-form";
import { signUpWithEmail, updateProfile } from "../../supabase/auth";
import { toast } from "sonner";
import { useAuth } from "../../context/AuthContext";
import SubmitBtn from "../SubmitBtn";

export default function RegisterForm() {
  const { register, handleSubmit } = useForm();
  const { setAuth } = useAuth();

  const onRegisterSubmit = handleSubmit(async (data) => {
    console.log(data);
    try {
      const res = await signUpWithEmail({
        email: data.email,
        password: data.password,
      });
      console.log(res);
      if (res) {
        const userData = res.data.user;
        const dataProfile = {
          id: userData.id,
          full_name: data.name,
        };
        await updateProfile(dataProfile);
      }
      toast.success("Registrado con exito");
      if (res && res.data && res.data.user) {
        setAuth({ user: res.data.user, isAuth: true });
      }
    } catch (error) {
      setAuth({ user: null, isAuth: false });
      if (error.error && error.error.message) {
        toast.error(error.error.message);
      } else {
        toast.error("Error al registrarse");
      }
    }
  });
  return (
    <form
      onSubmit={onRegisterSubmit}
      className="flex flex-col  gap-2 mx-auto mt-16 mb-20 [&>input]:p-4 [&>input]:rounded"
    >
      <input type="text" placeholder="Nombre" {...register("name")} />
      <input
        type="email"
        placeholder="ejemplo@email.com"
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
