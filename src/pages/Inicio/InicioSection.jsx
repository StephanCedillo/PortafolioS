import Home from "./Home";
import Presentacion from "./Presentacion";
import SobreMi from "./SobreMi";
import AboutText from "./Texto";
import LiquidEther from "../../Components/UI/EffectBackground";
import "./Css/Home.css";

const InicioSection = () => {
  return (
    <div className="inicio-container">
      <div className="background-effect">
        <LiquidEther
          colors={['#BE2323', '#FF9E9E', '#B19EEF']} 
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

        <div className="profile-wrapper">
            
  
            <section id="skills" className="glass-card">
              <Presentacion />
            </section>
            <section id="about" className="glass-card">
              <AboutText />
            </section>

        </div>
      </div>
    </div>
  );
};

export default InicioSection;