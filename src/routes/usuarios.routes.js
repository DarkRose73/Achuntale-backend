import { Router } from 'express'
// Importar el controlador de Usuarios
import * as UsuarioController from '../controllers/usuariosController'

const router = Router()

//  DEFINICIÓN DE LAS DISTINTAS RUTAS A UTILIZAR

router.get('/', UsuarioController.obtenerUsuarios)

// Esta ruta busca mediante post, así no envío los datos mediante la URL
router.post('/correo', UsuarioController.obetenerUsuarioPorCorreo)

router.post('/', UsuarioController.crearUsuario)

router.put('/', UsuarioController.actualizarDireccionEnvio)

export default router