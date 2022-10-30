import React from "react";
import {NavLink} from "react-router-dom";
import css from "./Informes.module.css"

function Informes (props){
    return(
        <div>
            <div className={css.titulo}>Informes</div>
            <div className={css.ContenedorBotones}>
                <nav>
                    <ul className={css.listaBotones}>
                        <NavLink to='/Nosotros' activeclassname="active" className={`btn btn-success ${css.lista}`} aria-current="page">
                        <li className={css.textoComponenteLista}>Jugador</li>
                        </NavLink >
                        <NavLink to='/Nosotros' activeclassname="active" className={`btn btn-success ${css.lista}`} aria-current="page">
                        <li >Partidos</li>
                        </NavLink>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export {Informes}