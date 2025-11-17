// SeccionInferior.jsx
import React from 'react';

const ItemCard = ({ titulo }) => {
  const estiloCard = {
    backgroundColor: 'black',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    width: 'calc(33.33% - 20px)', // Para 3 columnas con espacio
    height: '25vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '10px',
  };

  const estiloTitulo = {
    color: 'white',
    fontSize: '2em',
    textTransform: 'lowercase',
    fontWeight: 'bold',
  };

  return (
    <div style={estiloCard}>
      <span style={estiloTitulo}>{titulo}</span>
    </div>
  );
};

const SeccionInferior = () => {
  const estiloBarra = {
    display: 'flex',
    justifyContent: 'space-around',
    color: 'white',
    borderTop: '1px solid rgba(255, 255, 255, 0.3)',
    padding: '10px 0',
    fontSize: '0.9em',
    width: '100%',
  };

  const estiloContenedorCards = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '0 10px',
  };

  return (
    <div style={{ width: '100%' }}>
      {/* Barra de Navegación "Digital Nomad" / "Creative Developer" */}
      <div style={estiloBarra}>
        <span>Digital Nomad</span>
        <span>Creative Developer</span>
      </div>

      {/* Tarjetas inferiores */}
      <div style={estiloContenedorCards}>
        <ItemCard titulo="cairo." />
        <ItemCard titulo="oslo." />
        <ItemCard titulo="chain" />
      </div>

      {/* Botón de descarga/uso (el de la esquina) */}
      
    </div>
  );
};

export default SeccionInferior;