import React, { useEffect, useState } from "react";
import css from './EstilosConsulta.module.css';
import JSONconsulta from './datos-consulta.json';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import GroupAddIcon from '@mui/icons-material/GroupAdd';



// const [array, setArray] = useState();
let nombreE = 'hola';
let data = JSONconsulta;
let jugadores;
let array = [];
function FRMConsultarEquipo(props){

    function getarray(array){
        array = array;
        return array;
    }
    function buscarEquipo(){
        array = [];
        jugadores = '';
        if (nombreE !== ''){
            // try{
            //     setArray(data.equipos.find(e => {
            //         e.nombreEquipo == nombreE;
            //     }).Jugadores);
            // }catch (e){
            //     console.log(e);
            // }
            data.equipos.filter(day => {
                if (day.nombreEquipo === 'Medellin'){
                    jugadores = day.Jugadores.map(e => {
                        array.push({
                            Nombre: e.Nombre,
                            Apellido: e.Apellido,
                            Correo: e.Correo,
                            Telefono: e.Telefono,
                            NumeroCamisa: e.NumeroCamisa,
                        })
                    })
                }
            });
            console.log(array)
            console.log('llego bien')
            getarray(array);
        }else{
            alert('ingrese el nombre del equipo a buscar');
        }
        // if(array != ''){
        //     for (let i = 0; i < array.length -1; i++){
        //         array[i].pop();
        //     }
        // }

    }
    // useEffect(() =>{

    // }, [array]);
    // onChange={(e) => {nombreE = e.target.value}}
    // onClick={buscarEquipo}
    return(

        <div>
            <div style={{padding: '20px', fontFamily: 'Poppins, sans-serif'}}>
                <h1 class="text-success" style={{fontWeight: 'bolder'}}>Informacion de los jugadores de un equipo</h1>
            </div>
            <form style={{padding: '20px'}}>
                <label for="nombre" style={{fontSize: '28px', fontFamily: 'Poppins, sans-serif', fontWeight: '500'}} class="text-secondary">Nombre del equipo:  </label><input style={{borderRadius: '8px', fontSize: '20px', fontFamily: 'Poppins, sans-serif'}} id="nombre" type ='text' placeholder="Team Name" />
                <button style={{borderRadius: '8px',fontSize: '22px' }} class="btn btn-outline-info" type="button" >Buscar</button>
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
                        <th style={{}}>Opciones</th>
                    </thead>
                    <tbody>
                        {

                            //  data.equipos.filter((e)=> {
                            //     if(e.nombreEquipo === "Medellin"){
                            //         e.Jugadores.map((d) =>{
                            //             return (
                            //             <tr>
                            //                 <td>{d.Nombre}</td>
                            //                 <td>{d.Apellido}</td>
                            //                 <td>{d.Correo}</td>
                            //                 <td>{d.Telefono}</td>
                            //                 <td>{d.NumeroCamisa}</td>
                            //             </tr>
                            //             )
                            //         });
                            //     }
                            // })
                            data.map(d =>{
                                return (
                                    <tr>
                                        <td>{d.Nombre}</td>
                                        <td>{d.Apellido}</td>
                                        <td>{d.Correo}</td>
                                        <td>{d.Telefono}</td>
                                        <td>{d.NumeroCamisa}</td>
                                        <section style={{display: 'flex', gap: '8px', alignItems: 'center', justifyContent: 'center'}}>
                                            <button style={{borderRadius: '8px',fontSize: '22px', color: 'white' }} class="btn btn-info" type="button"><EditIcon/></button>
                                            <button style={{borderRadius: '8px',fontSize: '22px' }} class="btn btn-danger" type="button"><DeleteIcon/></button>
                                        </section>
                                    </tr>     
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <button style={{borderRadius: '8px',fontSize: '22px' }} class="btn btn-success" type="button"><GroupAddIcon/></button>
        </div>
    );



}


export{FRMConsultarEquipo}