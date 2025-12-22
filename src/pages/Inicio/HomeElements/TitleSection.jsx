import React from 'react';
import './css/TitleSection.css'; 

const TitleSection = () => {
  return (
    <div className="title-section-container">
      <h1 className="big-name" data-text="Stephan">
        Stephan
        <span className="trademark">TM</span>
      </h1>
      
      {/* Opcional: Un subtítulo pequeño estilo código */}
      <div className="hero-subtitle">
        FULL STACK DEVELOPER <span className="separator">/</span> DESIGNER
      </div>
    </div>
  );
};

export default TitleSection;