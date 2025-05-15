import React from "react";
import "../styles/Menu.css";

const Menu = () => {
  return (
    <div className="menu-page">
      <h2>Menú del Proyecto Final - AquaEco</h2>

      <div className="menu-section">
        <h3>Actividades Realizadas en el Curso</h3>
        <ul>
          <li>Actividad preliminar: Compartamos</li>
          <li>Actividad 1.1 - Metodología ágil SCRUM</li>
          <li>Actividad 1.2 - Product Backlog</li>
          <li>Actividad integradora Sprint, el corazón de SCRUM</li>
          <li>Actividad 2.1 - Aplicación de SCRUM</li>
          <li>Actividad 2.2 - Sprint Schedule</li>
          <li>Actividad integradora - Backlog y Sprint Schedule</li>
          <li>Actividad 3.1 - Primera fase de desarrollo y revisión</li>
          <li>Actividad 3.2 - Segunda fase y ajustes del backlog</li>
          <li>Actividad 3.3 - Tercera fase de desarrollo</li>
          <li>Actividad 4.1 - Reunión de revisión inicial</li>
          <li>Actividad 4.2 - Revisión de modificaciones</li>
          <li>Producto integrador final del curso</li>
        </ul>
      </div>

      <div className="menu-section">
        <h3>Sistema Implementado</h3>
        <p>
          <strong>AquaEco</strong> es una aplicación web desarrollada con React, que funciona como una tienda ecológica de ropa de natación 🩱🌊. Está diseñada para ofrecer una experiencia fluida y moderna al usuario. 
          El sistema incluye:
        </p>
        <ul>
          <li>🌍 Una interfaz principal con fondo marino que refuerza la identidad ecológica.</li>
          <li>🛒 Un carrito de compras interactivo con control de cantidades y total dinámico.</li>
          <li>🧾 Un formulario de registro simple, sin autenticación, accesible desde la navegación.</li>
          <li>📄 Una navegación clara entre secciones: Inicio, Registro y Menú del proyecto.</li>
        </ul>
        <p>
          Este proyecto demuestra la integración de tecnologías modernas (React, React Router, CSS modular) con prácticas de desarrollo ágil, centrado en la experiencia del usuario y el diseño visual profesional.
        </p>
      </div>

      <div className="menu-section">
        <h3>Código Fuente</h3>
        <p>
          El repositorio oficial del proyecto está disponible en GitHub:
        </p>
        <a
          href="https://github.com/omarr420/unidad-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/omarr420/unidad-3
        </a>
      </div>

      <div className="menu-section">
        <h3>Reporte de Modificaciones</h3>
        <ul>
          <li>Se integró React Router para navegación entre páginas.</li>
          <li>Se implementó un formulario de registro de usuario sin autenticación.</li>
          <li>Se mejoró el diseño visual general con fondo oceánico y estilo personalizado.</li>
          <li>Se agregó un sistema de carrito funcional con control de cantidades y eliminación de productos.</li>
          <li>Se desarrolló una sección tipo menú para presentación del proyecto final.</li>
          <li>Se reorganizó el código fuente para mayor claridad y modularidad.</li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;