import React, { useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";

// 1. DEFINIMOS LOS DATOS COMPLETOS DE CADA PROYECTO
const PROJECTS = [
  {
    title: "Pokédex Interactiva",
    description: "Una Pokédex completa en Angular que permite consultar y comparar Pokémon. Incluye estadísticas detalladas y opción de batallas entre dispositivos.",
    tech: ["Angular", "TypeScript", "SQL"],
    image: "https://images.unsplash.com/photo-1611605698420-2f1f7d6f4f7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Guawpaw",
    description: "Aplicación de mascota virtual con chatbot educativo y entretenido para niños. Incluye reconocimiento de entidades y actividades de aprendizaje.",
    tech: ["Angular", "Firebase", "Dialogflow"],
    image: "https://images.unsplash.com/photo-1606755962779-4a15b7e57b6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Videojuego Estilo Nuclear Throne",
    description: "Juego de acción multijugador online inspirado en Nuclear Throne. Actualmente en desarrollo, con sistema de personajes y armas.",
    tech: ["Godot", "C++", "Pixelrama"],
    image: "https://images.unsplash.com/photo-1590608897129-79aa4cfc37f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Configuración Hyprland en Arch Linux",
    description: "Personalización completa de Hyprland en Arch Linux, incluyendo tema, shortcuts, gestión de ventanas y optimización de rendimiento.",
    tech: ["Linux", "Bash", "Hyprland"],
    image: "https://images.unsplash.com/photo-1581090700227-5d8b9c7b0d07?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Juego de Memoria Rápido",
    description: "Mini juego de memoria para navegador donde debes emparejar cartas en el menor tiempo posible. Ideal para practicar lógica y reflexos.",
    tech: ["JavaScript", "HTML", "CSS"],
    image: "https://images.unsplash.com/photo-1581091012184-74a00b4d3c07?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  }
];


// Componente visual de la carta
const CardContent = ({ project }) => (
  <div 
    style={{ 
      position: 'relative', width: '100%', height: '100%', overflow: 'hidden',
      borderRadius: '12px', backgroundColor: '#222', 
      boxShadow: '0 4px 15px rgba(0,0,0,0.5)'
    }}
  >
    <img
      src={project.image}
      alt={project.title}
      style={{
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
        objectFit: 'cover', display: 'block'
      }}
    />
    {/* Título sobre la imagen (opcional) */}
    <div style={{
      position: 'absolute', bottom: 0, left: 0, width: '100%',
      background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
      padding: '20px 10px', textAlign: 'center'
    }}>
      <h3 style={{ color: 'white', margin: 0, fontSize: '1.2rem' }}>{project.title}</h3>
    </div>
  </div>
);

const Proyectos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsRef = useRef([]);
  const detailsRef = useRef(null); // Referencia para animar el texto

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      // --- ANIMACIÓN DE LAS CARTAS ---
      cardsRef.current.forEach((card, i) => {
        if (!card) return;

        if (i === currentIndex) {
          // Carta Actual
          gsap.to(card, {
            y: 0, x: 0, scale: 1, opacity: 1, zIndex: 100, rotation: 0,
            duration: 0.6, ease: "back.out(1.2)"
          });
        } else if (i < currentIndex) {
          // Carta Descartada (Cae)
          gsap.to(card, {
            y: 500, x: (Math.random() - 0.5) * 200, rotation: (Math.random() - 0.5) * 60,
            opacity: 0, zIndex: 0, scale: 0.8, duration: 0.6
          });
        } else {
          // Cartas en espera (Stack)
          const distance = i - currentIndex;
          gsap.to(card, {
            y: -distance * 15, scale: 1 - (distance * 0.05),
            zIndex: 50 - distance, opacity: distance > 2 ? 0 : 1,
            rotation: 0, duration: 0.6
          });
        }
      });

      // --- ANIMACIÓN DEL TEXTO DE DETALLES ---
      // Hacemos que el texto aparezca suavemente desde abajo cada vez que cambia
      if (detailsRef.current) {
        gsap.fromTo(detailsRef.current, 
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" }
        );
      }

    });
    return () => ctx.revert();
  }, [currentIndex]); // Se ejecuta al cambiar de proyecto

  const handleNext = () => {
    if (currentIndex < PROJECTS.length - 1) setCurrentIndex(prev => prev + 1);
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
  };

  // Función para manejar click en la carta superior
  const handleCardClick = (index) => {
    if (index === currentIndex) {
       // Si clickean la carta actual, quizás podrías abrir el proyecto o hacer zoom
       console.log("Abrir proyecto:", PROJECTS[index].title);
    }
  };

  const currentProject = PROJECTS[currentIndex];

  return (
    <div style={{ 
      width: '100%', minHeight: '100vh', backgroundColor: '#111', 
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      padding: '20px', boxSizing: 'border-box', fontFamily: 'sans-serif'
    }}>
      
      {/* --- SECCIÓN SUPERIOR: STACK DE CARTAS --- */}
      <div style={{ position: 'relative', width: '280px', height: '380px', marginBottom: '40px' }}>
        {PROJECTS.map((project, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            onClick={() => handleCardClick(i)}
            style={{
              position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
              cursor: i === currentIndex ? 'pointer' : 'default', // Manito solo en la actual
              opacity: 0 // Evita flash inicial
            }}
          >
             <CardContent project={project} />
          </div>
        ))}
      </div>

      {/* --- BOTONES DE NAVEGACIÓN --- */}
      <div style={{ display: 'flex', gap: '20px', marginBottom: '30px', zIndex: 200 }}>
        <button 
          onClick={handlePrev} disabled={currentIndex === 0}
          style={{
            padding: '10px 20px', borderRadius: '30px', border: 'none', cursor: 'pointer', fontWeight: 'bold',
            background: currentIndex === 0 ? '#333' : '#fff', color: currentIndex === 0 ? '#666' : '#000',
            transition: '0.3s'
          }}
        >
          ← Anterior
        </button>
        <button 
          onClick={handleNext} disabled={currentIndex === PROJECTS.length - 1}
          style={{
            padding: '10px 20px', borderRadius: '30px', border: 'none', cursor: 'pointer', fontWeight: 'bold',
            background: currentIndex === PROJECTS.length - 1 ? '#333' : '#fff', color: currentIndex === PROJECTS.length - 1 ? '#666' : '#000',
            transition: '0.3s'
          }}
        >
          Siguiente →
        </button>
      </div>

      {/* --- SECCIÓN INFERIOR: ESPECIFICACIONES (DETALLES) --- */}
      {/* Este contenedor se actualiza con la info del proyecto actual */}
      <div 
        ref={detailsRef}
        key={currentIndex} // El key fuerza a React a recrear el div para ayudar a la animación
        style={{
          maxWidth: '600px', width: '100%',
          backgroundColor: '#1f2937', // Gris oscuro elegante
          padding: '2rem', borderRadius: '16px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
          color: '#e5e7eb', textAlign: 'left'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h2 style={{ fontSize: '2rem', margin: 0, color: 'white', fontWeight: 'bold' }}>
            {currentProject.title}
          </h2>
          <span style={{ fontSize: '3rem', opacity: 0.1, fontWeight: '900', lineHeight: 0 }}>
            0{currentIndex + 1}
          </span>
        </div>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#9ca3af', marginBottom: '1.5rem' }}>
          {currentProject.description}
        </p>

        <div>
          <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', color: '#6b7280', marginBottom: '10px' }}>
            Tecnologías
          </h4>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {currentProject.tech.map((tech, index) => (
              <span 
                key={index}
                style={{
                  padding: '6px 14px', borderRadius: '20px', fontSize: '0.85rem',
                  backgroundColor: 'rgba(59, 130, 246, 0.2)', // Azul transparente
                  color: '#60a5fa', border: '1px solid rgba(59, 130, 246, 0.4)'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Proyectos;