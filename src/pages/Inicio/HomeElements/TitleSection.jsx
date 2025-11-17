import React from 'react';
import './css/TitleSection.css'; 

const TitleSection = ({ name }) => {
  return (
    <div className="title-section-container">
      <h2 className="big-name">{name}</h2>
      <span className="trademark">TM</span>
    </div>
  );
};

export default TitleSection;