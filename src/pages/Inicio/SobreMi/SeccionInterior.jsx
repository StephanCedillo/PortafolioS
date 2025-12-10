import React from 'react';
import './css/SeccionInferior.css'; // ¡No olvides importar el CSS!

const SeccionInferior = () => {
  return (
    <div className="footer-container">
      
      {/* 1. BARRA TIPO "TICKER" (Animación de texto infinito) */}
      <div className="marquee-container">
        <div className="marquee-content">
          {/* Repetimos el texto para que la animación sea fluida */}
          <span className="marquee-item">DIGITAL NOMAD</span>
          <span className="marquee-item">///</span>
          <span className="marquee-item">CREATIVE DEVELOPER</span>
          <span className="marquee-item">///</span>
          <span className="marquee-item">OPEN TO WORK</span>
          <span className="marquee-item">///</span>
          <span className="marquee-item">DIGITAL NOMAD</span>
          <span className="marquee-item">///</span>
          <span className="marquee-item">CREATIVE DEVELOPER</span>
          <span className="marquee-item">///</span>
          <span className="marquee-item">OPEN TO WORK</span>
        </div>
      </div>

      {/* 2. FRASE DECORATIVA GIGANTE */}
      <div className="big-statement">
        LET'S BUILD<br />THE FUTURE
      </div>

      {/* 3. TARJETAS DE CONTACTO / SOCIALES */}
      <div className="cards-grid">
        
        {/* Card 1: GitHub */}
        <a href="https://github.com/tu-usuario" target="_blank" rel="noreferrer" className="footer-card">
          <span className="card-title">GitHub</span>
          <span className="card-subtitle">Check my code</span>
        </a>

        {/* Card 2: LinkedIn */}
        <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noreferrer" className="footer-card">
          <span className="card-title">LinkedIn</span>
          <span className="card-subtitle">Let's connect</span>
        </a>

        {/* Card 3: Email */}
        <a href="mailto:tuemail@gmail.com" className="footer-card">
          <span className="card-title">Email</span>
          <span className="card-subtitle">Say hello</span>
        </a>

      </div>

      {/* Copyright pequeño */}
      <div style={{ textAlign: 'center', opacity: 0.3, fontSize: '0.8rem', marginTop: '40px' }}>
        © 2025 Stephan. All rights reserved.
      </div>

    </div>
  );
};

export default SeccionInferior;