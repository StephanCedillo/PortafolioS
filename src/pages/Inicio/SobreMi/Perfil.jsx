import React from 'react';
import './css/Perfil.css'; // Asegúrate de crear este archivo o ajustar la ruta

const Perfil = ({ imagenSrc }) => {
  // Si no hay imagen, usamos un color de respaldo o una imagen por defecto
  const backgroundStyle = imagenSrc ? `url(${imagenSrc})` : 'none';

  return (
    <div className="perfil-container">
      {/* Capa de la imagen de fondo */}
      <div 
        className="perfil-bg" 
        style={{ backgroundImage: backgroundStyle }} 
        role="img" 
        aria-label="Foto de perfil del desarrollador"
      />
      
      {/* Capa de degradado para que se mezcle con el fondo de la web */}
      <div className="perfil-overlay" />
    </div>
  );
};

export default Perfil;