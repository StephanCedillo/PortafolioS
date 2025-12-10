import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";
import "./css/Presentacion.css";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Presentacion() {
  // Tus datos (sin cambios)
  const categorias = {
    Frontend: [
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Angular",
      "Ionic",
      "React",
      "WordPress"
    ],
    Backend: [
      "Python",
      "Java",
      "SQL",
      "SQLite",
      "Firebase",
      "NoSQL (aprendiendo)"
    ],
    Otros: [
      "Git",
      "Linux (Arch, Ubuntu)",
      "i3wm",
      "Hyprland",
      "Godot"
    ],
    // Añadí una categoría "Diseño" para que coincida más con tu foto de ejemplo,
    // si no la quieres, bórrala.
    Diseño: [
       "Figma",
       "Illustrator",
       "Photoshop"
    ]
  };

  // Datos para el gráfico
  // Datos para el gráfico
  const data = {
    labels: Object.keys(categorias),
    datasets: [
      {
        // Ajusta los valores data[...] según la importancia real que quieras darles
        data: [40, 30, 15, 15],
        /* NUEVA PALETA DE COLORES ROJIZOS/OSCUROS */
        backgroundColor: [
          "rgba(163, 22, 33, 0.85)",  // Rojo Carmesí Profundo (Frontend)
          "rgba(102, 0, 0, 0.85)",    // Burdeos Muy Oscuro (Backend)
          "rgba(215, 78, 89, 0.85)",  // Rojo Desaturado/Coral (Otros)
          "rgba(82, 29, 41, 0.85)"    // Ciruela Oscuro (Diseño)
        ],
        // El borde oscuro ayuda a separar los segmentos sin ser chillón
        borderColor: "#121212", // Casi negro, para que coincida con el fondo
        borderWidth: 2,
        hoverBorderColor: "#ffffff", // Resalte blanco al pasar el mouse
        hoverBorderWidth: 3,
      }
    ]
  };
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "rgba(255,255,255,0.7)",
          font: { size: 12, family: '"Science Gothic", sans-serif' },
          padding: 20,
          usePointStyle: true,
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        titleFont: { size: 14 },
        bodyFont: { size: 13 }
      }
    },
    animation: { animateRotate: true, duration: 1200, easing: 'easeOutQuart' }
  };

  return (
    <div className="pie-container">
      {/* SECCIÓN IZQUIERDA: El Gráfico */}
      <div className="chart-section">
        <h2>Mis Herramientas</h2>
        <div className="chart-wrapper">
            <Pie data={data} options={chartOptions} />
        </div>
      </div>

      {/* SECCIÓN DERECHA: La nueva lista estilo "Palmer" */}
      <div className="skills-list-container">
        {Object.entries(categorias).map(([nombreCategoria, tecnologias], index) => (
          <div className="skill-row" key={nombreCategoria}>
            {/* El número grande (ej: 01) */}
            <div className="skill-number">
              {String(index + 1).padStart(2, '0')}
            </div>

            {/* El contenido de texto */}
            <div className="skill-content">
              <h3>{nombreCategoria}</h3>
              {/* Une el array con comas */}
              <p>{tecnologias.join(", ")}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}