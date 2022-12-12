import url from './urlApi.json'
import { FetchGeneral } from './FetchGeneral';

async function obtenerEquipo(equipo){
    console.log(equipo)
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    };
    let respuesta;
    console.log(`${url.url}/api/ControllerEquipo/obtenerEquipo${equipo}`)
    respuesta = await FetchGeneral(`${url.url}/api/ControllerEquipo/obtenerEquipo${equipo}`, requestOptions);
    
    return await respuesta;
}

async function actualizarJugador(jugador){

}

async function agregarJugador(jugador){
    
}

async function eliminarJugador(jugador){
    
}

export {
            obtenerEquipo,
            actualizarJugador,
            agregarJugador,
            eliminarJugador
        }