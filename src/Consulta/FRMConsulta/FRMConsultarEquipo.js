import React from "react";
import css from './EstilosConsulta.module.css';


function FRMConsultarEquipo(props){
    return(
        <div>
            <form>
                <label for="nombre">Nombre:  </label><input className="" id="nombre" type ='text' placeholder="Digite el nombre"/>
            </form>
            <table>
                <thead>
                    <th>nombre</th>
                </thead>
            </table>
        </div>
    );
}

export{FRMConsultarEquipo}