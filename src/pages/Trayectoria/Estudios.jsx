import React from "react";
import "./css/Estudios.css";

const Estudios = () => {
  return (
    <section className="edu-section">
      <div className="edu-container">
        
        {/* Encabezado */}
        <div className="edu-header">
          <h2 className="edu-title">
            Formación <span>Académica</span>
          </h2>
          <p style={{ color: '#8b949e', maxWidth: '600px', margin: '0 auto' }}>
            Bases teóricas y prácticas que fundamentan mi desarrollo profesional.
          </p>
        </div>

        {/* Timeline Vertical */}
        <div className="edu-timeline">

          {/* ITEM 1: UNIVERSIDAD (ACTUAL) */}
          {/* Añadimos la clase 'current' para activar el efecto de pulso */}
          <div className="edu-item current">
            <div className="edu-marker"></div>
            
            <div className="edu-card">
              {/* Icono de fondo decorativo */}
              <div className="edu-card-bg-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72L5.18 9L12 5.28L18.82 9zM17 15.99l-5 2.73l-5-2.73v-3.72L12 15l5-2.73v3.72z"/></svg>
              </div>

              <h3 className="edu-institution">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                Universidad Politécnica Salesiana
              </h3>
              
              <div className="edu-degree">
                Ingeniería en Ciencias de la Computación
              </div>
              
              <p style={{ color: '#9ca3af', fontSize: '0.95rem', lineHeight: '1.5' }}>
                Formación avanzada en algoritmos, estructuras de datos y arquitectura de software. Enfoque en desarrollo escalable y nuevas tecnologías.
              </p>

              <div className="edu-details">
                <span className="edu-date-badge">2025 – Presente</span>
                <span className="edu-status" style={{ color: '#34d399', fontWeight: 'bold' }}>• En Curso</span>
              </div>
            </div>
          </div>

          {/* ITEM 2: COLEGIO (FINALIZADO) */}
          <div className="edu-item">
            <div className="edu-marker"></div>
            
            <div className="edu-card">
              <div className="edu-card-bg-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3L1 9l11 6l9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/></svg>
              </div>

              <h3 className="edu-institution">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                Unidad Educativa Técnico Salesiano
              </h3>
              
              <div className="edu-degree">
                Bachiller Técnico en Informática
              </div>
              
              <p style={{ color: '#9ca3af', fontSize: '0.95rem', lineHeight: '1.5' }}>
                Especialización en programación de sistemas. Desarrollo de lógica computacional, mantenimiento de hardware y primeros proyectos de software.
              </p>

              <div className="edu-details">
                <span className="edu-date-badge">2022 – 2025</span>
                <span className="edu-status">Finalizado</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Estudios;