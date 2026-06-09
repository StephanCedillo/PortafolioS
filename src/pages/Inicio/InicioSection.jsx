import Home from "./Home";
import Presentacion from "./Presentacion";
import SobreMi from "./SobreMi";
import AboutText from "./Texto";
import React, { useState } from "react";
import LiquidEther from "../../Components/UI/EffectBackground";
import "./Css/Home.css";

import Principal from "./Principal";
  

const InicioSection = () => {
   //const [selectedProject, setSelectedProject] = useState(null);
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
            <section id="principal" className="glass-card">
              <Principal />
             
            </section>
            

        </div>
      </div>
    </div>
  );
};

export default InicioSection;