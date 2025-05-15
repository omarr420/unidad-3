import React from "react";
import "../styles/Menu.css";

const Menu = () => {
  return (
    <div className="menu-page">
      <h2>Menú del Proyecto Final - AquaEco</h2>

      <div className="menu-section">
        <h3>Actividades Realizadas en el Curso</h3>
        <ul>
          <li>Creacion del Produck Backlog con base PMI.</li>
          <li>Sprint 1: creacion del carrito y estructura del sitio.</li>
          <li>Act 2.1: Aplque SCRUM para tareas del backlog. </li>
          <li>Act 2.2: Diseño de Sprin Scheudle.</li>
          <li>Integracion de backlog y sprint en Act integradora.</li>
          <li>Revision primer sprint y revision de ajustes.</li>
          <li>Reunion de equipo para mejoras y ajustes.</li>
          <li>Act. 3.3: navegacion de paginas</li>
          <li>Recopilacion de docs y mejoras en codigo y subido a GitHub</li>
          <li>Act. 4.1: Organice una reunion de revision. </li>
          <li>Act 4.2:Segunda reunion, enfoque a ultimos ajustes.</li>
          <li>Finalmente, tienda web desarrollada con react bajo metodologia SCRUM.</li>
       
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