import React from "react";
import css from "./EstilosActualizar.module.css";

function FRMEquipo(props) {
  return (
    <div className={`form-control ${css.div_principal_actualizar}`}>
      <h2>Persona</h2>
      <form
      className={css.Datos}>
        <label for="nombre">Nombre: </label>
        <input
          id="nombre"
          type="text"
          placeholder="Nombre"
          className={css.inputActualizar}
        />
        <br />
        <div>
          <br />
          <button type="serch" className="form-control btn btn-primary">
            GUARDAR
          </button>
        </div>
      </form>
    </div>
  );
}

export { FRMEquipo };
