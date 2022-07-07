console.clear()
// Dependecias importadas del packageJSON
import Express from "express";
import index from "./routes/index.js";
import agregar from "./routes/agregar.js";
import borrar from "./routes/borrar.js";

// Declaracion de variables para 
const app = Express()

// Configurando de motores de plantillas
app.set('views', './views')
app.set('view engine', 'pug')

// Configuracion archivos estaticos
app.use(Express.static('./css'))
app.use(Express.static('./views'))
app.use(Express.static('./src'))
app.use(Express.static('./routes'))

// Routes estabecidas con Router
app.use('/', index)
app.use('/', agregar)
app.use('/', borrar)


// Iniciar el servidor
app.listen(3000, () => {
    console.log("Servidor funcionando y levantado")
})