// Perfil.jsx
import React from 'react';

const Perfil = ({ imagenSrc }) => {
  const estilo = {
    // Esto simula la parte de la imagen
    width: '40%', // O el ancho que desees
    height: '100vh',
    backgroundImage: `url(${imagenSrc})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    // Asegúrate de usar la imagen real si la tienes, o una de placeholder
  };

  return (
    <div style={estilo}>
      {/* Podrías poner la imagen directamente, pero el fondo es más versátil en este caso */}
      {/* Simplemente para mostrar la estructura con el texto, usamos un estilo de fondo. */}
    </div>
  );
};

export default Perfil;