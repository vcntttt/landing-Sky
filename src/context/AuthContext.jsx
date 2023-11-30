import { createContext, useContext, useState } from "react";
import supabase from "../supabase/client";
import { fetchUserProfile } from "../supabase/auth";
export const AuthContext = createContext();

// custom hook que devuelve el contexto

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth debe estar dentro del AuthProvider');
    }
    return context
}

export const AuthProvider = ({children}) => {
  // estados del contexto
  const [user, setUser] = useState(null)
  const [isAuth, setIsAuth] = useState(false)
// control de autenticacion
  const setAuth = async ({user,isAuth}) =>{
    console.log('setAuth', user, isAuth)
    setIsAuth(isAuth)
    setUser(user)
    if (user != null){
      const userName = await fetchUserProfile(user.id)
      if (userName){
        const updatedUser = {
          ...user,
          full_name: userName.full_name,
          isAdmin : userName.isAdmin
        }
        setUser(updatedUser)
      }
    } else{setUser(null)}
    }
 // cierre de sesion
  const logOut = () => {
    supabase.auth.signOut()
    setUser(null)
    setIsAuth(false)
  }

  return (
    // retornamos el contexto para que todos los componentes puedan acceder
    <AuthContext.Provider value={{user, isAuth, logOut, setAuth}}>
        {children}
    </AuthContext.Provider>
  )
}