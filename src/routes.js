import { Actualizar } from "./Actualizar/Actualizar.js";
import { FRMJugador } from "./Actualizar/FRMActualizar/FRMJugador.js";
import { FRMPartidos } from "./Actualizar/FRMActualizar/FRMPartidos.js";
import { FRMTorneo } from "./Actualizar/FRMActualizar/FRMTorneo.js";
import {FRMEstadisticas} from "./Actualizar/FRMActualizar/FRMEstadisticas";
import { Consulta } from "./Consulta/Consulta.js";
import { Informes } from "./Informes/Informes.js";
import { LandingPage } from "./LandingPage/LandingPage";
import { Nosotros } from "./Nosotros/Nosotros.js";
import { Registrar } from "./Registrar/Registrar.js";
import { FRMDatosPersonales } from "./Actualizar/FRMActualizar/FRMDatosPersonales.js";
import { FRMEquipo } from "./Actualizar/FRMActualizar/FRMEquipo.js";
import { FRMConsultarEquipo} from "./Consulta/FRMConsulta/FRMConsultarEquipo.js"
import { FRMConsultarJugador} from "./Consulta/FRMConsulta/FRMConsultarJugador.js"
import { FRMConsultarTorneo} from "./Consulta/FRMConsulta/FRMConsultarTorneo.js"

const rutas = [
        /*RUTAS INICIALES*/
    { path: '/', component: LandingPage },
    { path: '/Inicio', component: LandingPage, exact: true },
    { path: '*', component: LandingPage },
    { path: '/Consulta', component: Consulta, exact: true },
    { path: '/Actualizar', component: Actualizar, exact: true },
    { path: '/Registrar', component: Registrar, exact: true },
    { path: '/Informes', component: Informes, exact: true },
    { path: '/Nosotros', component: Nosotros, exact: true },


    /*RUTAS DEL ACTUALIZAR*/
    {path: '/ActualizarTorneo', component: FRMTorneo, exact: true},
    {path: '/ActualizarPartido', component: FRMPartidos, exact: true},
    {path: '/ActualizarJugador', component: FRMJugador, exact: true},
    {path: '/ActualizarEstadisticas', component: FRMEstadisticas, exact: true},
    {path: '/ActualizarEquipo', component: FRMEquipo, exact: true},
    {path: '/ActualizarDatosPersonales', component: FRMDatosPersonales, exact: true},  
    
        /*RUTAS DEL CONSULTAR*/
        {path:'/ConsultarTorneo', component: FRMConsultarTorneo, exact: true },
        {path:'/ConsultarJugador', component: FRMConsultarJugador, exact: true},
        {path:'/ConsultarEquipo', component: FRMConsultarEquipo, exact: true}
];

export {rutas}