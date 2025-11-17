import Home from "./Home";
import Presentacion from "./Presentacion";
import SobreMi from "./SobreMi";
import LiquidEther from "../../Components/UI/EffectBackground";
import "./Css/Home.css";

const InicioSection = () => {
  return (
    <div className="inicio-container">
      {/* Fondo fluido que cubre toda la pantalla */}
      <div className="background-effect">
        <LiquidEther
          colors={['#BE2323', '#FF9E9E', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      {/* Contenido encima del fondo */}
      <div className="inicio-content">
        <section id="presentacion">
          <Home />
        </section>

        <section id="sobremi">
          <Presentacion />
        </section>

        <section id="extra">
          <SobreMi />
        </section>
      </div>
    </div>
  );
};

export default InicioSection;
