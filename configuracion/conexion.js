const mysql = require('mysql');

const conexion = mysql.createConnection(
    {host: 'localhost',
    user: 'api',
    password: 'pqssword',
    port: 3306,
    database: 'testAPI'
}
)
conexion.connect((err)=>{
    if (err){
        console.log('error: '+err)}
    else {
        console.log('conexion realizada')
        }
    }
)

module.exports=conexion;