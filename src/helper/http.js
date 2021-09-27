import axios from "axios"

export default function http(url,method,body = null){
    try {
        let options = {
            method,
            url,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }
        method = method.toLowerCase()
        if (method == "get"){
            options = options;
        } else if (method == "post"){
            if (body){
                options = {...options, data: body}
            } else {
                throw 'Para realizar la peticion post se necesita pasar el cuerpo con la informacion'
            }
        } else {
            throw 'Metodo Desconocido'
        }
        return axios(options)
    } catch(err) {
        return err
    }

    
}