const router = require('express').Router()
const conexion = require('./config/conexion')

/** Get all */
router.get('/', (req, res) =>{
    let sql = 'select * from tb_equipo'
    conexion.query(sql, (err, rows, fields) => {
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

/** get id */
router.get('/:id', (req, res) =>{
    const {id} = req.params
    let sql = 'select * from tb_equipo where id_equipo = ?'
    conexion.query(sql, [id], (err, rows, fields) => {
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

/**Add equipo */
router.post('/', (req, res) =>{
    console.log(req)
    const{nombre, logo} = req.body
    let sql = `insert into tb_equipo(nombre, logo) values ('${nombre}', '${logo}')`
    conexion.query(sql, (err, rows, fields) =>{
        if(err) throw err;
        else{
            res.json({status: 'equipo agregado'})
        }
    })
})
/**Delete Equipo */
router.delete('/:id',(req, res) =>{
    const{id}= req.params

    let sql = `delete from tb_equipo where id_equipo = '${id}'`
    conexion.query(sql, (err, rows, fields) =>{
        if(err) throw err;
        else{
            res.json({status: 'equipo eliminado'})
        }
    })
})

/**Update Equipo */
router.put('/:id', (req, res) =>{
    const{id}= req.params
    const{nombre, logo} = req.body

    let sql = `update tb_equipo set 
                nombre = '${nombre}',
                logo='${logo}'
                where id_equipo = '${id}'`

    conexion.query(sql, (err, rows, fields) =>{
        if(err) throw err;
        else{
            res.json({status: 'equipo modificado'})
        }
    })
})

module.exports = router;