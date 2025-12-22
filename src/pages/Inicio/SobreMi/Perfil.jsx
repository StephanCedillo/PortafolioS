import React from 'react';
import './css/Perfil.css';

const Perfil = ({ imagenSrc }) => {
  return (
    <div className="perfil-contenedor">
      <img 
        className="perfil-imagen" 
        src={imagenSrc} 
        
      />
    </div>
  );
};

export default Perfil;