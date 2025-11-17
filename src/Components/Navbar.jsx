import { Link } from "react-router-dom";
import "./Css/Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <nav className="navbar-menu">
          <Link to="/" className="nav-link">Inicio</Link>
          <Link to="/trayectoria" className="nav-link">Trayectoria</Link>
          <Link to="/personal" className="nav-link">Personal</Link>
        </nav>

        <div className="navbar-logo">
          <h2>Stephan</h2>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
