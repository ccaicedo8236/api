const rutas = require('express').Router()
const { Router } = require('express');
const conexion = require('./configuracion/conexion')

rutas.get('/', (req, res)=>{
    let sql = 'select * from contactos'
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})


rutas.get('/:id', (req, res)=>{
    const {id} = req.params
    let sql = 'select * from contactos where id = ?'
    conexion.query(sql, [id], (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

rutas.post('/', (req, res)=>{
    const {nombres, apellidos, telefono, correo, foto, activo, semestre} = req.body
    let sql = `insert into 
                contactos(nombres, apellidos, telefono, correo, foto) 
                values ('${nombres}','${apellidos}','${telefono}','${correo}','${foto}')`

    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json({status: 'agregado' })
        }
    })
})

rutas.delete('/:id', (req, res)=>{
    const {id} = req.params
    let sql = `delete from contactos where id= '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json({status: 'eliminado' })
        }
    })
})

rutas.put('/:id', (req, res)=>{
    const {id} = req.params
    const {nombres, apellidos, telefono, correo, foto} = req.body
    
    let sql = `update contactos set 
                nombres = '${nombres}', 
                apellidos = '${apellidos}',
                telefono = '${telefono}',
                correo = '${correo}',
                foto = '${foto}'
               where id = '${id}'`

    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json({status: 'actualizado' })
        }
    })
})


module.exports = rutas;