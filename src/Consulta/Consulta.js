import React from "react";
import {NavLink} from "react-router-dom";
import css from "./Consulta.module.css"

function Consulta(props) {
    return (
        <div className={css.generalall}>
            <div className={css.titulo}>Consultar</div>
            <div className={css.ContenedorBotones}>
                <nav>
                    <ul className={css.listaBotones}>
                        <NavLink to='/ConsultarTorneo' activeclassname="active" className={`btn btn-success ${css.lista}`} aria-current="page">
                        <li className={css.textoComponenteLista}>Torneo</li>
                        </NavLink >
                        <NavLink to='/ConsultarEquipo' activeclassname="active" className={`btn btn-success ${css.lista}`} aria-current="page">
                        <li >Equipo</li>
                        </NavLink>
                        <NavLink to='/ConsultarJugador' activeclassname="active" className={`btn btn-success ${css.lista}`} aria-current="page">
                        <li>Jugador</li>
                        </NavLink>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export {Consulta}