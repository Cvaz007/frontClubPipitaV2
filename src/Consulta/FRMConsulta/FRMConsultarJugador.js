import React from "react";
import css from './EstilosConsulta.module.css';

function FRMConsultarJugador(props){
    return(
        <div>
            <form>
                <label for="cedula">Cedula:  </label><input className="" id="cedula" type ='text' placeholder="Digite la cedula"/>
            </form>
            <table>
                <thead>
                    <th>Cedula</th>
                    <th>Nombre</th>
                    <th>Equipo</th>
                </thead>
            </table>
        </div>
    );
}

export{FRMConsultarJugador}