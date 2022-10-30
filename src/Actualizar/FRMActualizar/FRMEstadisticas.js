import React from "react";
import css from "./EstilosActualizar.module.css";

function FRMEstadisticas(props) {
  return (
    <div className={`form-control ${css.div_principal_actualizar}`}>
      <h2>Jugador</h2>
      <form>
        <label for="cantAmarrillas">Cantidad amarrillas: </label>
        <input
          id="cantAmarrillas"
          type="text"
          placeholder="Cantidad amarrillas"
          className={css.inputActualizar}
        />
        <br />
        <label for="cantRojas">Cantidad de tarjetas rojas: </label>
        <input
          id="cantRojas"
          type="text"
          placeholder="Cantidad de tarjetas rojas"
          className={css.inputActualizar}
        />
        <br />
        <label for="cantGoles">Documento de identidad: </label>
        <input
          id="cantGoles"
          type="text"
          placeholder="Cantidad de goles"
          className={css.inputActualizar}
        />
        <br />
        <label for="cantFaltas">Correo: </label>
        <input
          id="cantFaltas"
          type="text"
          placeholder="Cantidad de faltas"
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

export { FRMEstadisticas };
