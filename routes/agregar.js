import Router from "express";
import { agregarUsuario } from '../src/DBMysql.js'
const agregar = Router()

agregar.use((req, res, next) => {
    next()
})

agregar.get('/agregar/:usuario/:numero', (req, res) => {
    let usuario = req.params.usuario
    let numero = req.params.numero
    agregarUsuario(usuario, numero)
    res.redirect('/')
})

export default agregar