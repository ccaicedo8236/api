// Con el paquete MySQL instalado se procede a cargar la librería
const mysql = require('mysql');

// Se define la conexión con los parámetros necesarios como host,
// usuario, clave, puerto y base de datos
const conexion = mysql.createConnection(
    {host: 'localhost',
    user: 'api',
    password: 'pqssword',
    port: 3306,
    database: 'testAPI'
}
);
// Si la conexión es exitosa muestra un mensaje por consola indicándolo
// caso contrario muestra el error generado
conexion.connect((err)=>{
    if (err){
        console.log('error: '+err)}
    else {
        console.log('conexion realizada')
        }
    }
)

// Se devuelve la conexión establecida
module.exports=conexion;