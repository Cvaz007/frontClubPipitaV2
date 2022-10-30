import React from "react";
import css from "./EstilosActualizar.module.css";

function FRMTorneo(props) {
  return (
    <div className={`form-control ${css.div_principal_actualizar}`}>
      <h2>Torneos Relampagos</h2>
      <form>
        {/* <label for='id'>Codigo:  </label><input id = 'id' type = 'text' placeholder='Indique el codigo del torneo' className={css.inputActualizar}/><br/> --> */}
        <label for="nombre">Nombre: </label>
        <input
          id="nombre"
          type="text"
          placeholder="Indique el nombre del torneo"
          className={css.inputActualizar}
        />
        <br />
        <label for="fechaInicial">Fecha inicial: </label>
        <input
          id="fechaIncial"
          type="datetime-local"
          placeholder="Indique la fecha inicial"
          className={css.inputActualizar}
        />
        <br />
        <label for="fechaFinal">Fecha inicial: </label>
        <input
          id="fechaFinal"
          type="datetime-local"
          placeholder="Indique la fecha Final"
          className={css.inputActualizar}
        />
        <div>
          <br />
          <button type="serch" className="form-control btn btn-primary">
            GUARDAR
          </button>
        </div>
      </form>
      <div id="modal"></div>
    </div>
  );
}
function Openmodal() {}

export { FRMTorneo };
