require('./configuracion/conexion')
const express = require('express');
const bp = require('body-parser')

const app = express();
const port = (process.env.port || 3000);

app.use(express.json());
app.use(bp.urlencoded({ extended: true }))

app.set('port', port);
app.use('/contactos', require('./rutas'))

app.listen(app.get('port'), (error)=>{
    if (error){
        console.log('Error al inicial el servidor: '+ error)
    }
    else{
        console.log('Servidor iniciado en el puerto:'+port)
    }
})