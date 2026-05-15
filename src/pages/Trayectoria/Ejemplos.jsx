import React from 'react';
import './css/Ejemplos.css'; // Asegúrate de crear este archivo CSS en la misma carpeta

export default function Ejemplos() {
  const categories = [
    {
      title: "Páginas y Aplicaciones Web",
      icon: "",
      levels: [
        {
          tag: "Avanzado",
          type: "advanced",
          desc: "Experiencias Completas",
          items: [
            "Crear aplicaciones desde cero pensando en el usuario final",
            "Sistemas interactivos (Juegos web, mascotas virtuales, barras de progreso)",
            "Hacer que la web sea súper rápida y eficiente"
          ]
        },
        {
          tag: "Intermedio",
          type: "intermediate",
          desc: "Funcionalidad",
          items: [
            "Webs que funcionan fluido como una App de celular",
            "Sistemas que guardan información y manejan usuarios",
            "Conexión de la página con datos reales"
          ]
        },
        {
          tag: "Básico",
          type: "basic",
          desc: "Diseño Visual",
          items: [
            "Páginas que se adaptan bien a celulares, tablets y PC",
            "Diseños modernos con animaciones suaves",
            "Estructuras claras y fáciles de leer"
          ]
        }
      ]
    },
    {
      title: "Computadoras y Sistemas",
      icon: "",
      levels: [
        {
          tag: "Avanzado",
          type: "advanced",
          desc: "Linux y Rendimiento",
          items: [
            "Instalar sistemas operativos rápidos y seguros desde cero",
            "Optimizar computadoras lentas eliminando basura innecesaria",
            "Personalizar el escritorio para que sea único y eficiente"
          ]
        },
        {
          tag: "Intermedio",
          type: "intermediate",
          desc: "Automatización",
          items: [
            "Diagnosticar y arreglar fallos en el sistema"
          ]
        }
      ]
    },
    {
      title: "Programas para PC (Java/Python)",
      icon: "",
      levels: [
        {
          tag: "Intermedio",
          type: "intermediate",
          desc: "Soluciones de Escritorio",
          items: [
            "Crear programas con ventanas y botones para Windows/Linux",
            "Sistemas para negocios (Inventarios, gestión escolar, ventas)",
            "Programas que copian datos de internet automáticamente (para no hacerlo a mano)",
            "Automatizar el manejo de archivos y carpetas"
          ]
        }
      ]
    },
    {
      title: "Guardado de Datos",
      icon: "",
      levels: [
        {
          tag: "Intermedio",
          type: "intermediate",
          desc: "Bases de Datos",
          items: [
            "Organizar información de clientes o productos de forma ordenada",
            "Sistemas de registro e inicio de sesión seguros (Login)"
          ]
        },
        {
          tag: "Básico",
          type: "basic",
          desc: "Datos Flexibles",
          items: [
            "Guardar información variada sin estructuras rígidas"
          ]
        }
      ]
    },
    {
      title: "Creatividad y Diseño",
      icon: "",
      levels: [
        {
          tag: "Intermedio",
          type: "intermediate",
          desc: "Juegos y Prototipos",
          items: [
            "Creación de videojuegos 2D entretenidos",
            "Diseñar cómo se verá una App antes de programarla",
            "Crear chats automáticos para responder preguntas frecuentes"
          ]
        }
      ]
    }
  ];

  return (
    <div className="portfolio-container">
      <header className="portfolio-header">
        <h1>Lo que se hacer y como puedo aportar</h1>
      </header>

      <div className="cards-grid">
        {categories.map((cat, index) => (
          <article key={index} className="tech-card">
            <div className="card-header">
              <span className="card-icon">{cat.icon}</span>
              <h2>{cat.title}</h2>
            </div>

            <div className="levels-container">
              {cat.levels.map((lvl, idx) => (
                <div key={idx} className={`level-section ${lvl.type}`}>
                  <div className="level-header">
                    <span className="badge">{lvl.tag}</span>
                    <span className="level-desc">{lvl.desc}</span>
                  </div>
                  <ul className="skill-list">
                    {lvl.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}