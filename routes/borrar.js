import Router  from "express";
import { borrarUsuario } from "../src/DBMysql.js";
const borrar=Router()

borrar.use((req,res,next)=>{
    next()
})

borrar.get('/borrar/:id',(req,res)=>{
    let id=req.params.id
    borrarUsuario(id)
    res.redirect('/')
})

export default borrar