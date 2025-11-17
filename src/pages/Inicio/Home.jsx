
import { useState } from 'react';
import LiquidEther from '../../Components/UI/EffectBackground';
import './Css/Home.css';
import HeroSection from './HomeElements/HeroSection';
import TitleSection from './HomeElements/TitleSection';

export default function Home() {
    return (
        <div className="effect-section">
          {/* Fondo fluido */}
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
    
          {/* Contenido encima */}
          <div className="content">
            {/* Título y Habilidades del diseño original */}
            <HeroSection /> 
            <hr></hr>
            {/* Nombre grande del diseño original */}
             <TitleSection name="Stephan" /> 

            {/* Placeholder de ejemplo */}
          </div>
        </div>
      );
}
