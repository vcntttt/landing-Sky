import { Toaster } from "sonner";
import LoginForm from "../components/authForms/LoginForm";
import RegisterForm from "../components/authForms/RegisterForm";
// import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  // const { setUser } = useAuth();
  return (
    <main className="p-6 grid md:grid-cols-2 grid-cols-1 gap-6">
      <section>
        <h1 className="text-center text-[40px] font-normal text-white">
          Iniciar Sesión
        </h1>
        <LoginForm />
      </section>
      <section>
        <h1 className="text-center text-[40px] font-normal text-white">
          Registrarse
        </h1>
        <RegisterForm />
      </section>
      <Toaster position="top-center" richColors />
    </main>
  );
}
