async function FetchGeneral (url, opcionesPeticion){
    let respuesta, error = false, datos, estado, mensaje;
    console.log(url)
    try {
        respuesta = await fetch(
            url, 
            opcionesPeticion
        );
        if (respuesta.status === 201) {
            datos = await respuesta.json();
            estado = await respuesta.status;
        } else {
            mensaje = await respuesta.text()
            error = true;
        }
    
        return await { datos, error, estado, mensaje }
    } catch (error) {
        error = true;
        return error;
    }
   
   
}

export {FetchGeneral}