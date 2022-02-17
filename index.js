// Se carga la conexion y express
require('./configuracion/conexion')
const express = require('express');
const bp = require('body-parser');

// mediante express se genera el servidor
const app = express();
// Se indica el puerto donde el servidor recibirá peticiones
const port = (process.env.port || 3000);

// Se indica que trabajará con JSON
app.use(express.json());
app.use(bp.urlencoded({ extended: true }));

// Se asigna el puerto al servidor generado
app.set('port', port);

// Se indica la ruta que servirá de raíz a la API
app.use('/contactos', require('./rutas'));

// Se inicia el servidor y se notifica por consola del áxito o de algún error 
app.listen(app.get('port'), (error)=>{
    if (error){
        console.log('Error al inicial el servidor: '+ error);
    }
    else{
        console.log('Servidor iniciado en el puerto:'+port);
    }
})