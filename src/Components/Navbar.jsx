import { Link, useLocation } from "react-router-dom";
import "./Css/Navbar.css";

import profilePic from "./icon.png"; 

const Navbar = () => {
  const location = useLocation();

  // Función para saber si el link está activo
  const isActive = (path) => location.pathname === path ? "active" : "";

  return (
    <header className="navbar">
      <div className="navbar-container">
        
      
        <div className="navbar-brand">
            
            <Link to="/" className="brand-name">
                Stephan<span className="cursor">_</span>
            </Link>
        </div>

        {/* DERECHA: MENU DE NAVEGACIÓN */}
        <nav className="navbar-menu">
          <Link to="/" className={`nav-link ${isActive("/")}`}>
            <span className="nav-num">01.</span> // About
          </Link>
          
          <Link to="/trayectoria" className={`nav-link ${isActive("/trayectoria")}`}>
            <span className="nav-num">02.</span> // Trayectoria
          </Link>
          
          <Link to="/personal" className={`nav-link ${isActive("/personal")}`}>
            <span className="nav-num">03.</span> // Personal
          </Link>
        </nav>

      </div>
    </header>
  );
};

export default Navbar;