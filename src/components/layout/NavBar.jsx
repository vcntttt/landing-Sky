import { useState } from 'react';
import { NavLink } from "react-router-dom";
import { useAuth } from '../../context/AuthContext';
// me copie mi navbar de integracion xd
export default function NavBar({styles}) {
    const [menuOpen, setMenuOpen] = useState(false);
    const {user, isAuth, logOut} = useAuth();
    const defectStyle = "underline hover:font-bold";

    return (
        <div className={`flex flex-row justify-between items-center p-6 ${styles}`}>
            <button className="md:hidden mr-4" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg> 
            : 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
             </svg>}
            </button>
            <ul className={`flex-grow md:flex md:flex-row flex-col gap-6 items-center
            ${menuOpen ? '' : 'hidden'} md:block`}>
                <li><NavLink className={({ isActive }) => isActive ? `font-bold ${defectStyle}` : `${defectStyle}`} to="/">Home</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? `font-bold ${defectStyle}` : `${defectStyle}`} to="/products">Productos</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? `font-bold ${defectStyle}` : `${defectStyle}`} to="/about">Sobre Nosotros</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? `font-bold ${defectStyle}` : `${defectStyle}`} to="/contact">Contacto</NavLink></li>
                {
                    user?.isAdmin && (
                        <li><NavLink className={({ isActive }) => isActive ? `font-bold ${defectStyle}` : `${defectStyle}`} to="/admin/msg">Mensajes</NavLink></li>
                    )
                    }
            </ul>
            <ul className='flex gap-4'>
            <li>
                <p>Hola, {user?.full_name || 'invitado'}</p>
            </li>
            {isAuth ? (
                    <li><button onClick={logOut} className={`${defectStyle}`}>Cerrar Sesion</button></li>
                    ) : (
                    <li><NavLink className={({ isActive }) => isActive ? `font-bold ${defectStyle}` : `${defectStyle}`} to="/login">Iniciar Sesion</NavLink></li>

                )}
            </ul>
        </div>
    )
}