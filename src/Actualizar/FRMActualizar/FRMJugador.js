import React from "react";
import css from "./EstilosActualizar.module.css";

function FRMJugador(props) {
  return (
    <div className={`form-control ${css.div_principal_actualizar}`}>
      <h2>Jugador</h2>
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
        <label for="apellido">Apellido: </label>
        <input
          id="apellido"
          type="text"
          placeholder="Apellido"
          className={css.inputActualizar}
        />
        <br />
        <label for="cc">Documento de identidad: </label>
        <input
          id="cc"
          type="text"
          placeholder="Documento de identidad"
          className={css.inputActualizar}
        />
        <br />
        <label for="correo">Correo: </label>
        <input
          id="correo"
          type="text"
          placeholder="Correo"
          className={css.inputActualizar}
        />
        <br />
        <label for="telefono">Teléfono: </label>
        <input
          id="telefono"
          type="text"
          placeholder="telefono"
          className={css.inputActualizar}
        />
        <br />
        <label for="sexo">Sexo: </label>{" "}
        <select>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
        </select>
        <br />
        <label for="numDorsal">Número de dorsal: </label>
        <input
          id="numDorsal"
          type="text"
          placeholder="Número de dorsal"
          className={css.inputActualizar}
        />
        <br />
        <label for="estado">Estado: </label>
        <select>
          <option value="activo">Activo</option>
          <option value="inactivo">Inactivo</option>
        </select>
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

export { FRMJugador };
