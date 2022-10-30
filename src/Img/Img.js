import React from "react";
import LogoPipita from './PpitaHiguain.png'
import css from './Img.module.css'

function Img(props) {
    return (
        <div
            className={css.contenedorImg}>
                <img src={LogoPipita} className={css.tamanoImg}></img> 
        </div>
    )
}

export {Img}