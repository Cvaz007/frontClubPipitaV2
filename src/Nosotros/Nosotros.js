import React from "react";
import css from './Nosotros.module.css'


function Nosotros (props){
    return(
        <div>
            <div className={css.Titulos}>
                    Nosotros
            </div>

            <br></br>
            <br></br>

        <div class="row" className={css.centrar}>

                
                <div class="col-md-2">    
                        <div className={css.Titulos2}>
                                Mision
                        </div>

                        <div className={css.texto2}>
                        
                        Ofrecer una mejor experiencia en la obtención de datos deportivos a la ves de dar la garantía de la fidelidad de los datos recopilados
                                        
                        </div>
                </div>

                <div class="col-md-2">    
                        <div className={css.Titulos2}>
                                Vision
                        </div>

                        <div className={css.texto2}>
                        
                        Ser la aplicación web #1  en la búsqueda de información fiable y oportuna de los encuentros deportivos
                                    
                        </div>
                </div>
                <br></br>
        </div>   

             <div   className={css.Titulos}>
                    Quienes somos
            </div>

            <div className={css.texto1}>
            <p>
            Club pipita esta conformado por  4 estudiantes de desarrollo de sofware del Instituto Tecnológico Metropolitano ITM, con en la intención me facilitar el almacenamiento y consulta de los datos deportivos y lograr así una consolidación más óptima y confiable de los datos medinte un aplicativo web
            </p>                
            </div><br></br>

        </div>
    );
}

export {Nosotros}