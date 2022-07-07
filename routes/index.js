import Router from "express";
import { obtenerDatos } from '../src/DBMysql.js'
const index = Router()
index.use((req, rest, next) => {
    next()
})

index.get('/', (req, res) => {
    const datesBD = obtenerDatos()
    let datos = datesBD || []
    res.render('index', datos = { usuarios: datos })
})

export default index