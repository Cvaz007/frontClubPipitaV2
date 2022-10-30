import React from "react"

function Opciones(props) {

    return (
        <div>
            <div className={css.titulo}>Registrar</div>
            <div className={css.ContenedorBotones}>
                <nav>
                    <ul className={css.listaBotones}>
                        {
                            props.torneo ? <NavLink to={props.torneo} activeclassname="active" className={`btn btn-success ${css.lista}`} aria-current="page">
                                <li className={css.textoComponenteLista}>Torneo</li>
                            </NavLink > : null
                        }
                        <NavLink to='/Nosotros' activeclassname="active" className={`btn btn-success ${css.lista}`} aria-current="page">
                            <li >Equipo</li>
                        </NavLink>
                        <NavLink to='/Nosotros' activeclassname="active" className={`btn btn-success ${css.lista}`} aria-current="page">
                            <li>Jugador</li>
                        </NavLink>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export {}