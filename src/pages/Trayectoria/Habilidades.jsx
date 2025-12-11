import React from "react";
import "./css/Habilidades.css"; // ¡Importante importar el CSS!

const SKILL_DATA = [
  {
    category: "Desarrollo Web",
    gradClass: "grad-red", // Referencia a la clase CSS del gradiente
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
    ),
    items: [
      { name: "Angular", level: "Proyectos: Pokédex, Guawpaw" },
      { name: "React / React Native", level: "Básico / Apoyo" },
      { name: "TypeScript / JavaScript", level: "Sólido" },
      { name: "HTML5 & CSS3", level: "Responsivo / Animaciones" },
      { name: "Node.js", level: "Back-end ligero" },
    ],
  },
  {
    category: "Sistemas & Linux",
    gradClass: "grad-blue",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
    ),
    items: [
      { name: "Linux Avanzado", level: "Arch Linux, Hyprland, Scripts" },
      { name: "Bash Scripting", level: "Automatización" },
      { name: "Windows / macOS", level: "Soporte y Mantenimiento" },
      { name: "Hardware", level: "Mantenimiento Periféricos" },
    ],
  },
  {
    category: "Bases de Datos",
    gradClass: "grad-yellow",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
    ),
    items: [
      { name: "SQL", level: "Gestión estructurada" },
      { name: "Firebase", level: "Auth & Storage" },
      { name: "MongoDB / NoSQL", level: "Conocimiento básico" },
    ],
  },
  {
    category: "Herramientas & Otros",
    gradClass: "grad-purple",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
    ),
    items: [
      { name: "Git / GitHub", level: "Control de versiones" },
      { name: "Game Dev Web", level: "HTML5 Canvas, Godot" },
      { name: "Chatbots / NLP", level: "Dialogflow" },
      { name: "UX / UI", level: "Optimización rendimiento Figma Krita" },
    ],
  },
];

const SOFT_SKILLS = [
  "Proactivo y Autodidacta",
  "Analítico / Resolución de problemas",
  "Documentación clara",
  "Trabajo en equipo",
  "Aprendizaje rápido",
];

const SkillCard = ({ data }) => (
  <div className="hab-card">
    {/* Efecto de Gradiente (Glow) */}
    <div className={`hab-card-glow ${data.gradClass}`} />
    
    <div className="hab-card-header">
      <div className="hab-icon-box">
        {data.icon}
      </div>
      <h3 className="hab-cat-title">{data.category}</h3>
    </div>

    <ul className="hab-list">
      {data.items.map((item, idx) => (
        <li key={idx} className="hab-list-item">
          <span className="hab-item-name">{item.name}</span>
          <span className="hab-item-level">{item.level}</span>
          
          {/* Barra de progreso decorativa */}
          <div className="hab-progress-bg">
            <div 
              className={`hab-progress-fill ${data.gradClass}`} 
              style={{ transitionDelay: `${idx * 100}ms` }} 
            />
          </div>
        </li>
      ))}
    </ul>
  </div>
);

const Habilidades = () => {
  return (
    <section className="hab-section">
      <div className="hab-container">
        
        {/* ENCABEZADO */}
        <div className="hab-header">
          <h2 className="hab-title">
            Arsenal <span className="hab-title-highlight">Técnico</span>
          </h2>
          <p className="hab-subtitle">
            Stack tecnológico enfocado en rendimiento, personalización (Linux/Arch) y experiencias interactivas modernas.
          </p>
        </div>

        {/* GRID DE HABILIDADES TÉCNICAS */}
        <div className="hab-grid">
          {SKILL_DATA.map((skill, index) => (
            <SkillCard key={index} data={skill} />
          ))}
        </div>

        {/* SECCIÓN DE HABILIDADES BLANDAS */}
        <div className="hab-soft-container">
            <div className="hab-soft-text">
                <h3>Habilidades Blandas</h3>
                <p>
                    La base humana detrás del código. Enfoque en la mejora continua y la comunicación efectiva.
                </p>
            </div>

            <div className="hab-tags-wrapper">
                {SOFT_SKILLS.map((soft, i) => (
                    <span key={i} className="hab-tag">
                        {soft}
                    </span>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default Habilidades;