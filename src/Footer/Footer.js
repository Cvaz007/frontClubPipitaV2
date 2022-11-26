import React from "react";
import css from "./Footer.module.css"

function Footer(props){
    return(
<footer className={css.footer}>
  <div className={css.footer__addr}>
        
    <h2>Contacto</h2>
    
    <address>
      Numero: 123456543<br/>Correo: clubpipitafc@itm.edu.co<br/>Direccion: Calle 10 #20-20
    </address>
  </div>
  
  <ul className={css.footer__nav}>
    <li className={css.nav__item}>
      <h2 className={css.nav__title}>Nosotros</h2>
      <ul className={css.nav__ul}>
        <li>
          <a href="#">Mision</a>
        </li>

        <li>
          <a href="#">Vision de quienes somos</a>
        </li>
            
        <li>
          <a href="#">Quienes somos</a>
        </li>
      </ul>
    </li>  
    </ul>
  <div className={css.legal}>
    <p>&copy; 2022 ClubPipita. todos los derechos reservados.</p>
    
    <div className={css.legal__links}>
      <span>Hecho por <span className={css.heart}>.</span>DREAM TEAM y leandro</span>
    </div>
  </div>
</footer>
    );
}

export {Footer}