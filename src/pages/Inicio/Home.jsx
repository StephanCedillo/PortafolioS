import React from 'react';
import LiquidEther from '../../Components/UI/EffectBackground'; // Adjust path as needed
import HeroSection from './HomeElements/HeroSection';
import TitleSection from './HomeElements/TitleSection';
import './Css/Home.css'; // Your Home specific CSS

export default function Home() {
    return (
        <div className="inicio-container">
          {/* Fondo fluido fijo */}
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
    
          {/* Contenido desplazable (Scrollable) */}
          <div className="inicio-content">
            {/* Sección 1: Introducción y Foto 3D */}
            <HeroSection /> 
            
            {/* Sección 2: Nombre Gigante (Marca) */}
            <TitleSection /> 

            {/* Aquí puedes agregar más secciones como <AboutText />, <Skills />, etc. */}
          </div>
        </div>
      );
}