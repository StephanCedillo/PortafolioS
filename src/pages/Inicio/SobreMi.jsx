// SobreMi.jsx
import fondoMatrix from './assets/cod.png';
import miFoto from './assets/me1.png';
import React from 'react';
import Perfil from './SobreMi/Perfil';
import HeaderBio from './SobreMi/HeaderBio';

import './css/SobreMi.css'; // Importamos el CSS mágico

const SobreMi = () => {
  return (
    <section className="sobre-mi-container">
      
     
      <div className="columna-bio">
        <HeaderBio />
      </div>

    </section>
  );
};

export default SobreMi;