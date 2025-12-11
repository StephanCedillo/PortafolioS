import React from "react";
// Puedes usar el mismo CSS de SobreMi o uno específico si prefieres
import "./css/Texto.css"; 

const AboutText = () => {
  return (
    <div className="text-content">
      <p>
        <strong>Hola, soy Stephan.</strong> A mis 17 años, me considero un desarrollador 
        creativo que vive en la intersección entre la lógica y la imaginación. 
        Mi pasión es crear proyectos interactivos que conecten con las personas, 
        ya sea un <strong>videojuego</strong>, una herramienta educativa o una web dinámica.
      </p>

      <p>
        Me defino como <strong>autodidacta y organizado</strong>. Disfruto enfrentando 
        retos de forma estructurada, buscando siempre el equilibrio entre un código 
        lógico y una experiencia de usuario fluida. La curiosidad es mi motor: 
        siempre estoy experimentando con nuevas ideas para mejorar mis habilidades.
      </p>

      <p>
        He desarrollado desde aplicaciones para niños hasta videojuegos con 
        sistemas de estadísticas y progreso. Mi objetivo es siempre entregar 
        proyectos que combinen utilidad con un diseño <strong>minimalista y funcional</strong>.
      </p>

      <div className="fun-fact">
        <span className="icon">🏔️</span>
        <p>
            <strong>Dato personal:</strong> Cuando no estoy frente a la pantalla, 
            me encontrarás dibujando, creando historias o <strong>programando cualquier cosa</strong>. 
            Creo que la creatividad técnica se alimenta de las aventuras del mundo real.
        </p>
      </div>
    </div>
  );
  };

export default AboutText;