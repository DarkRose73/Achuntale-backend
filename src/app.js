import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import UsuariosRoutes from './routes/usuarios.routes'
import ComunasRoutes from './routes/comunas.routes'
import ComprasRoutes from './routes/compras.routes'

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

// Ruta usuarios
app.use((req, res, next) => {

    // Dominio que tengan acceso (ej. 'http://example.com')
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Metodos de solicitud que deseas permitir
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

    // Encabecedados que permites (ej. 'X-Requested-With,content-type')
    res.setHeader('Access-Control-Allow-Headers', '*');

    next();
})
app.use('/api/usuarios', UsuariosRoutes)
app.use('/api/comunas', ComunasRoutes)
app.use('/api/compras', ComprasRoutes)

// TODO eliminar esto luego de hashear las passwords
// Ejemplo de Hashing con bcrypt NO BORRAR
// app.post('/test', async (req, res) => {
//     const user = req.body.user
//     const password = req.body.password

//     if (user === "ADMIN" && password === "123456") {
//         // bcryptjs.hash(elemento a hashear, numero de saltos o "salt")
//         let passwordHash = await bcryptjs.hash(password, 10)
//         res.json({
//             message: "Autenticacion exitosa",
//             passwordHash: passwordHash
//         })
//     } else {
//         res.json({
//             message: "Credenciales incorrectas"
//         })
//     }
// })
// app.get('/compare', (req, res) => {
//     let hashSaved = "$2b$10$J9zi6aZKsWJP0hi8HCxtwu7O8tT3nSRrHYJCDw6LxHTxkftGlAUbq"
//     let compare = bcryptjs.compareSync('123456', hashSaved)
//     if (compare) {
//         res.json('OK')
//     } else {
//         res.json('not OK')
//     }
// })

export default app;