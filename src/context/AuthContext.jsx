import { createContext, useContext, useEffect, useState } from "react";
import supabase from "../supabase/client";

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

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
        if (!session) {
            setUser(null)
        } else{
            setUser(session.user)
        }
    })
    console.log('user', user)
  },[])

  const logOut = () => {
    supabase.auth.signOut()
  }

  return (
    <AuthContext.Provider value={{user, setUser}}>
        {children}
    </AuthContext.Provider>
  )
}