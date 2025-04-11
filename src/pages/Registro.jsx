import React from "react";
import "../styles/Registro.css";

const Registro = () => {
  return (
    <div className="registro-container">
      <h2>📝 Registro de usuario</h2>
      <form className="registro-form">
        <label>
          Nombre:
          <input type="text" placeholder="Tu nombre" required />
        </label>
        <label>
          Correo electrónico:
          <input type="email" placeholder="tucorreo@email.com" required />
        </label>
        <label>
          Edad:
          <input type="number" placeholder="Tu edad" min="1" required />
        </label>
        <label>
          ¿Has reciclado antes?
          <select required>
            <option value="">Selecciona una opción</option>
            <option value="si">Sí</option>
            <option value="no">No</option>
          </select>
        </label>
        <button type="submit">Registrarme</button>
      </form>
    </div>
  );
};

export default Registro;