// Se carga express
const rutas = require('express').Router();
const { Router } = require('express');

// Se carga la conexión a la base de datos
const conexion = require('./configuracion/conexion');

// La primera ruta o ruta raíz se la invoca con un GET devolverá el listado completo de contactos
rutas.get('/', (req, res)=>{
    let sql = 'select * from contactos';
    conexion.query(sql, (err, rows, fields)=>{
        // Si existe algún error es notificado
        if(err) throw err;
        else{
            // Si todo funciona correctamente devuelve los datos
            res.json(rows);
        }
    })
})

// Si a la ruta raíz se la invoca con un GET y se le agrega un parámetro devolverá el campo específico
rutas.get('/:id', (req, res)=>{
    const {id} = req.params;
    let sql = 'select * from contactos where id = ?';
    conexion.query(sql, [id], (err, rows, fields)=>{
        // Si existe algún error es notificado
        if(err) throw err;
        else{
            // Si todo funciona correctamente devuelve el dato seleccionado
            // el cual también puede ser un objeto vacío si se solicito un ID que no existe
            res.json(rows);
        }
    })
})

// Si a la ruta raíz se la invoca con un POST y se le agrega valores en formato JSON
// en el BODY estos servirán para ingresar un nuevo registro
rutas.post('/', (req, res)=>{
    // Se toman los valores del parámetro req que trae lo enviado en el BODY
    const {nombres, apellidos, telefono, correo, foto, activo, semestre} = req.body;
    let sql = `insert into 
                contactos(nombres, apellidos, telefono, correo, foto) 
                values ('${nombres}','${apellidos}','${telefono}','${correo}','${foto}')`;
    
    // Si la inserción tiene éxito se notifica, caso contrario se notifica el error
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json({status: 'agregado' });
        }
    })
})

// Si a la ruta raíz se la invoca con un DELETE y se le agrega el parámetro
// se elimina registro indicado por el mismo
rutas.delete('/:id', (req, res)=>{
    const {id} = req.params;
    let sql = `delete from contactos where id= '${id}'`;
    // Si la eliminación tiene éxito se notifica, caso contrario se notifica el error
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json({status: 'eliminado' });
        }
    })
})

// Si a la ruta raíz se la invoca con un PUT, se le agrega el parámetro del ID
// y se envía los registros en formato JSON en el BODY se procede a actualizar
rutas.put('/:id', (req, res)=>{
    // El parámetro del ID se obtiene del "req.params" y los datos del "req.body"
    const {id} = req.params;
    const {nombres, apellidos, telefono, correo, foto} = req.body;
    
    let sql = `update contactos set 
                nombres = '${nombres}', 
                apellidos = '${apellidos}',
                telefono = '${telefono}',
                correo = '${correo}',
                foto = '${foto}'
               where id = '${id}'`;

    // Si la actualización tiene éxito se notifica, caso contrario se notifica el error
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json({status: 'actualizado' });
        }
    })
})

// Se devuelve el módulo de rutas
module.exports = rutas;