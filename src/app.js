import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import UsuariosRoutes from './routes/usuarios.routes'
// import ComunasRoutes from './routes/comunas.routes'

const app = express()
//  Configuraciones
// Definir puerto
app.set('port', process.env.PORT || 4000)

//  Middlewares
// Solucionar problemas de CORS
app.use(cors())
// Muestra de datos en consola al realizar peticiones
app.use(morgan('dev'))
// Utilización de metodos JSON
app.use(express.json())
// Solucionar problemas de puntuacion (tildes,etc)
app.use(express.urlencoded({ extended: false }))

//  Rutas
// Ruta Raiz
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to my application' })
})

// Rutas API
app.use('/api/usuarios', UsuariosRoutes)

// app.use('/api/comunas', ComunasRoutes)


export default app;