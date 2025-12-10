// HeaderBio.jsx 
import React from 'react';

const HeaderBio = () => { 
  // Contenedor principal
  const estiloContainer = {
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '60vh',
    fontFamily: '"Science Gothic", sans-serif',
  };

  // Texto principal
  const estiloTexto = {
    color: 'white',
    fontSize: '1.75vw',
    maxWidth: '75%',
    lineHeight: '1.35',
    fontWeight: 300,
    letterSpacing: '0.5px',
  };

  // Resaltado
  const highlight = {
    color: '#9AE6B4',  // Verde suave elegante (puedo cambiarlo a vino si quieres)
    fontWeight: 500,
  };

  return (
    <div style={estiloContainer}>
      
      <h1 style={estiloTexto}>
        Soy Stephan, un desarrollador enfocado en crear 
        <span style={highlight}> interfaces claras</span>, 
        <span style={highlight}> fluidas</span> y 
        <span style={highlight}> bien estructuradas</span>.  
        Trabajo principalmente con 
        <span style={highlight}> Angular</span>, pero también utilizo 
        <span style={highlight}> Python</span>, 
        <span style={highlight}> Java</span>, 
        <span style={highlight}> Firebase</span>, 
        <span style={highlight}> Godot</span> y gestiono mis entornos en 
        <span style={highlight}> Linux</span>, donde disfruto optimizar mi flujo de trabajo.  
        Me interesa construir experiencias que combinen 
        <span style={highlight}> buena arquitectura</span>, 
        <span style={highlight}> accesibilidad</span> y un diseño que se sienta 
        <span style={highlight}> natural</span>.  
        Sigo aprendiendo cada día para crecer en lo técnico y lo creativo.
      </h1>

      <div style={{
        color: 'white',
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100%',
        fontSize: '0.8em',
        fontFamily: '"Science Gothic", sans-serif',
      }}>
        <span></span>
      </div>
    </div>
  );
};

export default HeaderBio;
