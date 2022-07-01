import { Router } from 'express'
// Importar el controlador de Usuarios
import * as ComprasController from '../controllers/comprasController'

const router = Router()

//  DEFINICIÓN DE LAS DISTINTAS RUTAS A UTILIZAR

router.get('/', ComprasController.obtenerCompras)
router.post('/', ComprasController.crearCompra)

export default router