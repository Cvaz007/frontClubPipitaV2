import React from "react";
import css from './EstilosConsulta.module.css';
import JSONconsulta from './datos-consulta.json';


function FRMConsultarEquipo(props){
    let data = JSONconsulta;
    return(
        <div>
            <div style={{padding: '20px', fontFamily: 'Poppins, sans-serif'}}>
                <h1 class="text-success" style={{fontWeight: 'bolder'}}>Informacion de los jugadores de un equipo</h1>
            </div>
            <form style={{padding: '20px'}}>
                <label for="nombre" style={{fontSize: '28px', fontFamily: 'Poppins, sans-serif', fontWeight: '500'}} class="text-secondary">Nombre del equipo:  </label><input style={{borderRadius: '8px', fontSize: '20px', fontFamily: 'Poppins, sans-serif'}} id="nombre" type ='text' placeholder="Team Name"/>
                <button style={{borderRadius: '8px',fontSize: '22px' }} class="btn btn-outline-info" type="button">Buscar</button>
            </form>
            <div style={{padding: '20px',display: 'grid', justifyContent: 'center'}}>
                <div style={{padding: '20px', fontFamily: 'Poppins, sans-serif', display: 'grid', justifyContent: 'center'}}>
                    <h3 style={{fontSize: '40px', fontWeight: 'bolder', color: 'white' , background: 'var(--bs-teal)', borderRadius: '20px', padding: '15px 40px'}}>LISTA DE JUGADORES EN EL EQUIPO</h3>
                </div>
                <div></div>
                <table style={{border: 'solid var(--bs-gray-900) 2px'}}>
                    <thead style={{textAlign: 'center'}}>
                        <th style={{}}>Nombre</th>
                        <th style={{}}>Apellido</th>
                        <th style={{}}>Correo</th>
                        <th style={{}}>Telefono</th>
                        <th style={{}}>Numero Camisa</th>
                    </thead>
                    <tbody>
                        {
                        data.map(e => {
                            return(
                                <tr>
                                    <td>{e.Nombre}</td>
                                    <td>{e.Apellido}</td>
                                    <td>{e.Correo}</td>
                                    <td>{e.Telefono}</td>
                                    <td>{e.NumeroCamisa}</td>
                                </tr>
                            )
                        }) 
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export{FRMConsultarEquipo}