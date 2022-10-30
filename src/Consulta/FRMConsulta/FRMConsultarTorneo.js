import React, { useState } from "react";
import css from './EstilosConsulta.module.css';
import data from "./datos-consulta.json"



function FRMConsultarTorneo(props){

    const [torneo, settorneo]=useState(data)
    
    return(
        <div>
            <form>
                <label for="codigo">Codigo:  </label><input className="" id="codigo" type ='text' placeholder="Digite el codigo"/>
            </form>
            <div className="contenedor">
                <table>
                    <thead>
                        <th>Codigo</th>
                        <th>Fecha inicio</th>
                        <th>Fecha final</th>
                    </thead>
                    <tbody>
                        {torneo.map((torneo)=>(
                            <tr>
                                <td>{torneo.codigo}</td>
                                <td>{torneo.fechainicio}</td>
                                <td>{torneo.fechafinal}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div>
                    <button>nuevo torneo</button>
                </div>
            </div>
            


        </div>
        
    );
}

export{FRMConsultarTorneo}

