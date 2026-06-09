import React, { useState } from "react";
import arch from "./assets/Arch.jpeg" 
import pokedex from "./assets/Pokedex.gif"
const Principal = () => {

  const [selectedProject, setSelectedProject] = useState(null);


  const projects = [
    {
      title: "Pokédex Interactiva",
      description: "Una Pokédex completa en Angular que permite consultar y comparar Pokémon. Incluye estadísticas detalladas y opción de batallas entre dispositivos.",
      tech: ["Angular Ionic", "TypeScript"],
      image: pokedex, 
      link: ""
    },
    {
      title: "Guawpaw",
      description: "Aplicación de mascota virtual con chatbot educativo. Incluye reconocimiento de entidades y actividades de aprendizaje.",
      tech: ["Angular", "Firebase", "Dialogflow"],
      image: "", 
      link: "https://github.com/GuawPaw/appguawpaw.git"
    },
    {
      title: "Arch Hyprland",
      description: "Juego de acción multijugador online. Actualmente en desarrollo, con sistema de personajes y armas.",
      tech: ["Arch Linux", "Hyperland", ""],
      image: arch, 
      link: ""
    }
  ];

  return (
    <div style={styles.container}>
      
      <div style={styles.header}>
        <h2 style={styles.title}>Mis Proyectos Principales </h2>
        <p style={styles.subtitle}>Haz clic en una tarjeta para ver los detalles</p>
      </div>

      <div style={styles.grid}>
        {projects.map((project, index) => (
          <div 
            key={index} 
            style={styles.card}
            onClick={() => setSelectedProject(project)}
            className="project-card" 
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 30px rgba(0,0,0,0.5)';
                e.currentTarget.style.borderColor = '#fa6060';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.3)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
            }}
          >
            <div style={styles.cardImageContainer}>
              <img src={project.image} alt={project.title} style={styles.cardImage} />
              <div style={styles.cardOverlay}>
                <span style={styles.viewMoreText}>Ver detalles ↗</span>
              </div>
            </div>
            <div style={styles.cardMiniInfo}>
              <h3 style={styles.cardTitle}>{project.title}</h3>
              <div style={styles.techTagsMini}>
                {project.tech.slice(0, 2).map((t, i) => (
                    <span key={i} style={styles.tagMini}>{t}</span>
                ))}
                {project.tech.length > 2 && <span style={styles.tagMini}>+</span>}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div style={styles.modalOverlay} onClick={() => setSelectedProject(null)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            
            <button style={styles.closeButton} onClick={() => setSelectedProject(null)}>✕</button>

            <div style={styles.modalGrid}>
                <div style={styles.modalImageWrapper}>
                    <img src={selectedProject.image} alt={selectedProject.title} style={styles.modalImage} />
                </div>

                <div style={styles.modalInfo}>
                    <h5 style={styles.modalSubtitle}>Proyecto Destacado</h5>
                    <h2 style={styles.modalTitle}>{selectedProject.title}</h2>
                    
                    <p style={styles.modalDescription}>{selectedProject.description}</p>

                    <div style={styles.techStackContainer}>
                        <span style={{color: '#888', fontSize: '0.9rem'}}>Tecnologías:</span>
                        <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
                            {selectedProject.tech.map((tech, i) => (
                                <span key={i} style={styles.techTag}>{tech}</span>
                            ))}
                        </div>
                    </div>

                    <div style={styles.modalActions}>
                        <button style={styles.btnPrimary}>Ver Demo</button>
                        <button style={styles.btnSecondary}>GitHub</button>
                    </div>
                </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

// --- ESTILOS EN JAVASCRIPT ---
const styles = {
  container: {
    minHeight: '100vh',
    padding: '4rem 2rem',
    fontFamily: "'Inter', sans-serif",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#0f172a', 
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '0.5rem',
  },
  subtitle: {
    color: '#94a3b8',
    fontSize: '1.1rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
    gap: '2rem',
    width: '100%',
    maxWidth: '1200px',
  },
  card: {
    backgroundColor: '#1e293b',
    borderRadius: '16px',
    overflow: 'hidden',
    cursor: 'pointer',
    border: '1px solid rgba(255,255,255,0.1)',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
  },
  cardImageContainer: {
    width: '100%',
    height: '200px',
    position: 'relative',
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  cardOverlay: {
    position: 'absolute', inset: 0,
    background: 'rgba(0,0,0,0.5)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    opacity: 0, transition: '0.3s',
  },
  viewMoreText: {
    color: 'white', fontWeight: 'bold', border: '1px solid white', padding: '8px 16px', borderRadius: '20px'
  },
  cardMiniInfo: {
    padding: '1.5rem',
  },
  cardTitle: {
    color: 'white', margin: '0 0 10px 0', fontSize: '1.2rem',
  },
  techTagsMini: {
    display: 'flex', gap: '8px', flexWrap: 'wrap',
  },
  tagMini: {
    fontSize: '0.75rem', color: '#94a3b8', background: 'rgba(255,255,255,0.05)', padding: '4px 8px', borderRadius: '4px',
  },
  modalOverlay: {
    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    backdropFilter: 'blur(8px)', 
    zIndex: 1000,
    display: 'flex', justifyContent: 'center', alignItems: 'center',
    padding: '20px',
  },
  modalContent: {
    backgroundColor: '#1e293b',
    width: '100%', maxWidth: '900px',
    borderRadius: '24px',
    border: '1px solid rgba(255,255,255,0.1)',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
    position: 'relative',
    overflow: 'hidden',
    maxHeight: '90vh',
    overflowY: 'auto', 
  },
  closeButton: {
    position: 'absolute', top: '20px', right: '20px',
    background: 'rgba(0,0,0,0.3)', border: 'none', color: 'white',
    width: '36px', height: '36px', borderRadius: '50%',
    cursor: 'pointer', zIndex: 10, fontSize: '1.2rem',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  modalGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
  },
  modalImageWrapper: {
    background: '#000',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    minHeight: '300px',
  },
  modalImage: {
    width: '100%', height: '100%', objectFit: 'cover', display: 'block',
  },
  modalInfo: {
    padding: '3rem',
    display: 'flex', flexDirection: 'column', gap: '1.5rem',
  },
  modalSubtitle: {
    color: '#fa6060', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem', margin: 0,
  },
  modalTitle: {
    color: 'white', fontSize: '2.5rem', margin: 0, lineHeight: 1.1,
  },
  modalDescription: {
    color: '#e1d2cb', lineHeight: 1.6, fontSize: '1.05rem',
  },
  techStackContainer: {
    display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '1rem',
  },
  techTag: {
    background: 'rgba(96, 165, 250, 0.1)', color: '#fa6360',
    padding: '6px 14px', borderRadius: '50px', fontSize: '0.9rem', fontWeight: '500',
  },
  modalActions: {
    display: 'flex', gap: '1rem', marginTop: '1rem',
  },
  btnPrimary: {
    padding: '12px 24px', borderRadius: '8px', border: 'none',
    background: 'white', color: 'black', fontWeight: 'bold', cursor: 'pointer',
  },
  btnSecondary: {
    padding: '12px 24px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)',
    background: 'transparent', color: 'white', fontWeight: 'bold', cursor: 'pointer',
  }
};

export default Principal;