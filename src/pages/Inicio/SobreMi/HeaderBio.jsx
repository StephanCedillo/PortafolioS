import React from 'react';

const HeaderBio = () => { 
  // Contenedor principal
  const estiloContainer = {
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    // CAMBIO 1: Usar min-height en vez de height fijo evita que se corte si el texto es largo
    minHeight: '60vh', 
    fontFamily: '"Science Gothic", sans-serif',
    
    // CAMBIO 2: Esto es lo vital. Empuja el contenido hacia abajo.
    // Ajusta este valor (80px, 100px) según la altura de tu barra de navegación.
    marginTop: '80px', 
    // Opcional: asegúrate que el z-index lo ponga por encima
    position: 'relative', 
    zIndex: 2,
  };

  // Texto principal
  const estiloTexto = {
    color: 'white',
    // CAMBIO 3: '1.5vw' es muy pequeño en celular. 
    // clamp(mínimo, ideal, máximo) hace que el texto sea responsive pero legible.
    fontSize: 'clamp(1.2rem, 1.5vw, 2.5rem)', 
    maxWidth: '90%', // Un poco más ancho para aprovechar espacio
    lineHeight: '1.5', // Un poco más de aire entre líneas
    fontWeight: 300,
    letterSpacing: '0.5px',
  };

  // Resaltado (Ajustado a tus colores de referencia anteriores)
  const highlight = {
    
    color: '#9AE6B4',    
    fontWeight: 500,
    textShadow: '0 0 10px rgba(154, 230, 180, 0.2)', // Un brillito sutil
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

    </div>
  );
};

export default HeaderBio;