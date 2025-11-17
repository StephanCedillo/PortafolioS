// SobreMi.jsx
import React from 'react';
import Perfil from './SobreMi/Perfil';
import HeaderBio from './SobreMi/HeaderBio';
import SeccionInterior from './SobreMi/SeccionInterior';
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
      {/* Columna Izquierda: Imagen = imagenSrc={imagenStephan} */}
      <Perfil />

      {/* Columna Derecha: Contenido */}
      <div style={estiloContenidoDerecho}>
        <HeaderBio/>
        <SeccionInterior />
      </div>
    </div>
  );
};

export default SobreMi;