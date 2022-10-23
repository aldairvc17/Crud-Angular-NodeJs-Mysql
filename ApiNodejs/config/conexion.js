/**Conexion a BBDD mysql */
const mysql =  require('mysql');
const conexion = mysql.createConnection({
  host: 'localhost'  ,
  user: 'root',
  password: 'admin',
  port:3306,
  database: 'db_basico'
})

conexion.connect((err) => {
    if (err){
        console.log('ha ocurrido un problema'+ err)
    }
    else {
        console.log('la base de datos se conecto correctamente')
    }
});

module.exports = conexion;