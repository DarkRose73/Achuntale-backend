import { Router } from 'express'
// Importar el controlador de Usuarios
import * as UsuarioController from '../controllers/usuariosController'
import Usuario from '../models/Usuario'

const router = Router()

//  DEFINICIÓN DE LAS DISTINTAS RUTAS A UTILIZAR

router.get('/', UsuarioController.obtenerUsuarios)

router.post('/correo', UsuarioController.obetenerUsuarioPorCorreo)

router.post('/', UsuarioController.crearUsuario)

router.put('/', UsuarioController.actualizarDireccionEnvio)

export default router