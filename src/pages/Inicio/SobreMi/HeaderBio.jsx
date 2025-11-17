// HeaderBio.jsx (Anteriormente Presentacion.jsx)
import React from 'react';

const HeaderBio = () => { // <--- Nombre cambiado aquí
  const texto = "Soy Stephan, desarrollador creativo enfocado en construir interfaces limpias, interactivas y visualmente armoniosas.";

  // Estilos (se mantienen igual por simplicidad en este ejemplo)
  const estiloTexto = {
    color: 'white',
    fontSize: '2.5vw',
    maxWidth: '80%',
    lineHeight: '1.2',
  };

  const estiloBoton = {
    color: 'white',
    backgroundColor: 'transparent',
    border: '2px solid white',
    padding: '10px 20px',
    marginTop: '20px',
    cursor: 'pointer',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    fontSize: '1em',
  };

  return (
    <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '50vh' }}>
      <h1 style={estiloTexto}>{texto}</h1>
      <button style={estiloBoton}>CONTACT</button>
      <div style={{ color: 'white', marginTop: '20px', display: 'flex', justifyContent: 'flex-end', width: '100%', fontSize: '0.8em' }}>
        <span></span>
      </div>
    </div>
  );
};

export default HeaderBio; // <--- Exportación cambiada aquí