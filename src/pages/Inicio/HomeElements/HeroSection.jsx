import React, { useRef } from 'react';
import './css/HeroSection.css';
import computerImg from '../assets/programming.png';

const HeroSection = () => {
  const imageRef = useRef(null);

  const handleMouseMove = (e) => {
    const img = imageRef.current;
    if (!img) return;

    const rect = img.getBoundingClientRect();
    const x = e.clientX - rect.left; // posición dentro del elemento
    const y = e.clientY - rect.top;

    const midX = rect.width / 2;
    const midY = rect.height / 2;

    const rotateX = ((y - midY) / midY) * 10; // inclinación vertical
    const rotateY = ((x - midX) / midX) * 10; // inclinación horizontal

    img.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  };

  const handleMouseLeave = () => {
    const img = imageRef.current;
    if (img) {
      img.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
    }
  };

  return (
    <section className="hero-container">
      <div className="hero-left">
        <h1 className="hero-title">
          Creative developer <br />
          blending logic <br />
          and art.<br />
          Stephan Cedillo
        </h1>
        <br />
        <div className="hero-skills-wrapper">
          <div
            className="hero-skills"
            data-duplicate="Art Direction   Branding   Strategy   Design   Development"
          >
            <span className="skill-item">Art Direction</span>
            <span className="skill-item">Strategy</span>
            <span className="skill-item">Design</span>
            <span className="skill-item">Development</span>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <img
          ref={imageRef}
          src={computerImg}
          alt="Developer working on laptop"
          className="hero-image"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        />
      </div>
    </section>
  );
};

export default HeroSection;
