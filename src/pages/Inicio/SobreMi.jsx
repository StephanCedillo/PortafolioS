// SobreMi.jsx
import React from 'react';
import Perfil from './SobreMi/Perfil';
import HeaderBio from './SobreMi/HeaderBio';
import meImg from './assets/me.jpg';
const SobreMi = () => {
  const estiloContenedor = {
    display: 'flex',
    height: '100vh',
    backgroundColor: 'black',
    fontFamily: 'sans-serif', 
    overflow: 'hidden',
  };

  const estiloContenidoDerecho = {
    width: '60%', 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative',
  };

  const imagenStephan = meImg;

  return (
    <div style={estiloContenedor}>
      {/* Columna Izquierda:  */}
      <Perfil  imagenSrc={imagenStephan} />

      {/* Columna Derecha: Contenido */}
      <div style={estiloContenidoDerecho}>
        <HeaderBio/>
        
      </div>
    </div>
  );
};

export default SobreMi;