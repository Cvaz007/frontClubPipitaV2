import config from '../APIConfig.json';
import { Request } from '../Scripts/Validaciones';

async function Fetch(metodo, objeto, sufijoUrl, token) {
    var datos = null, error = false, estado=null;
    var respuesta = null;
    if (objeto) {
        respuesta = await fetch(`${config.api}${sufijoUrl}`,
            {
                method: metodo,
                mode: 'cors',
                headers: {
                    'Accept': "application/json, text/plain, */*",
                    'Content-Type': "application/json;charset=utf-8",
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(objeto),
            })
    } else {
        respuesta = await fetch(`${config.api}${sufijoUrl}`,
            {
                method: metodo,
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
    }
    if (token) {
        if (respuesta.ok) {
            try {
                datos = await respuesta.json();
            } catch {
                datos = await respuesta.body;
            }
        } else {
            error = (true);
            estado = await respuesta.status;
            Request(estado);
        }
    } else {
        if (respuesta.ok) {
                datos = await respuesta.text();
        } else {
            error = (true);
            Request(estado);
        }
    }

    return await { datos, error, estado }
}

export { Fetch }