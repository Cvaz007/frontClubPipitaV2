import React, { useEffect, useState } from "react";
import css from './EstilosConsulta.module.css';
import JSONconsulta from './datos-consulta.json';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { obtenerEquipo } from "../../Peticiones/Peticiones";



// const [array, setArray] = useState();
function FRMConsultarEquipo(props) {

    const history = useNavigate();
    const [equipo, setEquipo] = useState();
    const [carga, setCarga] = useState();
    const [nombreEquipo, setNombreEquipo] = useState();

    useEffect(() => {

    }, [equipo]);

    const buscarEquipo = async () => {
        let respuesta = await obtenerEquipo(nombreEquipo);
        if (!respuesta.error)
            setEquipo(respuesta.datos);
    }

    const agregarJugador = () => {
        history('');
    }


    const handleChange = (e) => {
        setNombreEquipo(e.target.value);
    }

    return (

        <div>
            <div style={{ padding: '20px', fontFamily: 'Poppins, sans-serif' }}>
                <h1 class="text-success" style={{ fontWeight: 'bolder' }}>Informacion de los jugadores de un equipo</h1>
            </div>
            <form style={{ padding: '20px' }}>
                <label for="nombre" style={{ fontSize: '28px', fontFamily: 'Poppins, sans-serif', fontWeight: '500' }} class="text-secondary">Nombre del equipo:  </label><input onChange={handleChange} style={{ borderRadius: '8px', fontSize: '20px', fontFamily: 'Poppins, sans-serif' }} id="nombre" type='text' placeholder="Team Name" />
                <button onClick={buscarEquipo} style={{ borderRadius: '8px', fontSize: '22px' }} class="btn btn-outline-info" type="button" >Buscar</button>
            </form>
            <div style={{ padding: '20px', display: 'grid', justifyContent: 'center' }}>
                <div style={{ padding: '20px', fontFamily: 'Poppins, sans-serif', display: 'grid', justifyContent: 'center' }}>
                    <h3 style={{ fontSize: '40px', fontWeight: 'bolder', color: 'white', background: 'var(--bs-teal)', borderRadius: '20px', padding: '15px 40px' }}>LISTA DE JUGADORES EN EL EQUIPO</h3>
                </div>
                <div></div>
                <table style={{ border: 'solid var(--bs-gray-900) 2px' }}>
                    <thead style={{ textAlign: 'center' }}>
                        <th style={{}}>Nombre</th>
                        <th style={{}}>Apellido</th>
                        <th style={{}}>Correo</th>
                        <th style={{}}>Telefono</th>
                        <th style={{}}>Numero Camisa</th>
                        <th style={{}}>Opciones</th>
                    </thead>
                    <tbody>
                        {
                            equipo ?
                                equipo.Jugadors.map(j => {
                                    return (
                                        <tr key={j.idNavigation.id}>
                                            <td>
                                                {j.idNavigation.nombre}
                                            </td>
                                            <td>
                                                {j.idNavigation.apellido}
                                            </td>
                                            <td>
                                                {j.idNavigation.nombre}
                                            </td>
                                            <td>
                                                {j.idNavigation.telefono}
                                            </td>
                                            <td>
                                                {j.numdorsal}
                                            </td>
                                            <td>
                                                <button >
                                                    <EditIcon></EditIcon>
                                                </button>
                                                <button>
                                                    <DeleteIcon></DeleteIcon>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                }
                                )
                                :
                                null
                        }
                    </tbody>
                </table>
            </div>
            <button onClick={agregarJugador} style={{ borderRadius: '8px', fontSize: '22px' }} class="btn btn-success" type="button"><GroupAddIcon /></button>
        </div>
    );
}

export { FRMConsultarEquipo }