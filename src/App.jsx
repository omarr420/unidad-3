import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cart from "./Components/Cart.jsx";
import Registro from "./pages/Registro.jsx"; // 👈 importa tu nueva página
import "./styles/Cart.css";

function App() {
  return (
    <Router>
      <div className="nav">
        <h1>🩱 AquaEco - Tienda de Natación</h1>
        <nav>
          <Link to="/">Inicio</Link> | <Link to="/Registro">Registro</Link>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Cart />} />
        <Route path="/Registro" element={<Registro />} />
      </Routes>
    </Router>
  );
}

export default App;