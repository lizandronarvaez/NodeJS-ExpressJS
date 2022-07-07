import mysql from 'mysql'

let datesDatabase

const ConecctionDatabase = mysql.createConnection({

    host: "localhost",
    user: "lizandronarvaez",
    password: "ecuador",
    database: "contactos"

})

const agregarUsuario = (usuario, numero) => {
    const add = `INSERT INTO usuarios (id,nombre,numero) values (${null},"${usuario}",${numero})`
    ConecctionDatabase.query(add, function (err, result, filed) {
        if (err) throw err
    })

}

const borrarUsuario = (id) => {
    const sql = `DELETE FROM usuarios WHERE id= ${id}`
    ConecctionDatabase.query(sql)
}

const obtenerDatos = () => {

    const sql = 'SELECT * From usuarios'
    ConecctionDatabase.query(sql, (err, result, filed) => {
        datesDatabase = result
    })

    return datesDatabase
}
export { agregarUsuario, borrarUsuario, obtenerDatos }