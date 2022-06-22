import { Router } from 'express'
// Importar el controlador de Usuarios
import * as UsuarioController from '../controllers/usuariosController'

const router = Router()

//  DEFINICIÓN DE LAS DISTINTAS RUTAS A UTILIZAR

router.get('/', UsuarioController.obtenerUsuarios)

router.post('/correo', UsuarioController.obetenerUsuarioPorCorreo)

router.post('/', UsuarioController.crearUsuario)

export default router