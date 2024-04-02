import {Routes, Route, Outlet, Link} from "react-router-dom";
import { useState } from 'react'; // Importar useState
import './Navigation.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
        <header className="Header">
        <img src="https://i.pinimg.com/564x/f3/b5/64/f3b56482d380196ca7e2f7c18e20b21f.jpg" alt="Logotipo" className="Logo" />
        <nav className={`Header-nav ${isOpen ? "isVisible": ""}`} >
            <ul className="Header-ul">
                <li>
                    <Link to="/">Bienvenida</Link>
                </li>
                <li>
                    <Link to="/lista">libros</Link>
                </li>
                <li>
                    <Link to="/agregar">Agregar</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                </ul>
            </nav>
            <button onClick={toggleMenu} className='Header-btn'>
            <FontAwesomeIcon icon={faBars} className="Menu-icon" />
            </button>
        </header>
        </>
    )
}

export default Navigation;