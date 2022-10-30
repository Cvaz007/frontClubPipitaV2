import React, { createContext } from "react";
import css from "./NavBar.module.css"
import { NavLink } from "react-router-dom";

function NavBar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <NavLink to='/' activeclassname="active" className={`nav-link ${css.contenedorOpciones}`} aria-current="page">
            <li className={`nav-item ${css.contenedorOpciones} ${css.ClubPipitaTitulo}`}>Club Pipita</li>
          </NavLink>
          <div className={`collapse navbar-collapse ${css.contenedorOpciones}`} id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <NavLink to='/Nosotros' activeclassname="active" className="nav-link" aria-current="page">
                <li className="nav-item">Nosotros</li>
              </NavLink>
              <NavLink to='/Consulta' activeclassname="active" className="nav-link" aria-current="page">
                <li className="nav-item">Consultar</li>
              </NavLink>
              <NavLink to='/Actualizar' activeclassname="active" className="nav-link" aria-current="page">
                <li className="nav-item">Actualizar</li>
              </NavLink>
              <NavLink to='/Registrar' activeclassname="active" className="nav-link" aria-current="page">
                <li className="nav-item">Registrar</li>
              </NavLink>
              <NavLink to='/Informes' activeclassname="active" className="nav-link" aria-current="page">
                <li className="nav-item">Informes</li>
              </NavLink>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="¿Buscar?" aria-label="Search" />
              <button className="btn btn-outline-info" type="submit">Buscar</button>
            </form>
          </div>
        </div>
      </nav>
      <div className={css.fondo}></div>
    </div>
  );
}

export { NavBar }