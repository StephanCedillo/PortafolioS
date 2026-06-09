
import React from 'react';
import Perfil from './SobreMi/Perfil';
import HeaderBio from './SobreMi/HeaderBio';

import './css/SobreMi.css';

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