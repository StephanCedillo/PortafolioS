import Home from "./Home";
import Presentacion from "./Presentacion";
import SobreMi from "./SobreMi";
import LiquidEther from "../../Components/UI/EffectBackground";
import "./Css/Home.css";

const InicioSection = () => {
  return (
    <div className="inicio-container">
      <div className="background-effect">
        <LiquidEther
          colors={['#BE2323', '#FF9E9E', '#B19EEF']} 
          // ... tus configuraciones ...
          mouseForce={20}
          cursorSize={100}
          autoDemo={true}
        />
      </div>

      <div className="inicio-content">
        {/* Intro Principal */}
        <section id="home" className="section-block">
          <Home />
        </section>

        {/* CONTENEDOR DE PERFIL: Agrupa Historia y Skills */}
        <div className="profile-wrapper">
            
            {/* Tarjeta 1: Quién soy */}
            <section id="sobremi" className="glass-card">
              <SobreMi />
            </section>

            {/* Tarjeta 2: Mis Herramientas (El diagrama) */}
            <section id="skills" className="glass-card">
              <Presentacion />
            </section>

        </div>
      </div>
    </div>
  );
};

export default InicioSection;