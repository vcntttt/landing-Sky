import { createContext, useContext, useState } from "react";
import supabase from "../supabase/client";
import { fetchUserProfile } from "../supabase/auth";
export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth debe estar dentro del AuthProvider');
    }
    return context
}

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const [isAuth, setIsAuth] = useState(false)

  const setAuth = async ({user,isAuth}) =>{
    console.log('setAuth', user, isAuth)
    setIsAuth(isAuth)
    setUser(user)
    if (user != null){
      const userName = await fetchUserProfile(user.id)
      if (userName){
        const updatedUser = {
          ...user,
          full_name: userName
        }
        setUser(updatedUser)
      }
    } else{setUser(null)}
    }

  const logOut = () => {
    supabase.auth.signOut()
  }

  return (
    <AuthContext.Provider value={{user, isAuth, logOut, setAuth}}>
        {children}
    </AuthContext.Provider>
  )
}