import React from "react";
import css from './EstilosActualizar.module.css';

function FRMPartidos(props){
    return(
        <div className={`form-control ${css.div_principal_actualizar}`}>
        <h2>Partido</h2>
        <form>
            <label for='fecha'>Fecha</label>
            <input id='fechaPartido' type='datetime-local' placeholder='Fecha del partido'></input>
            <div>
                <br/>
                <button type ='serch' className="form-control btn btn-primary">GUARDAR</button>
            </div>
        </form>
        </div>
    );
}

export{FRMPartidos}