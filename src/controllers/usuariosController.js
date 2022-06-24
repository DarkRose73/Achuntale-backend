// Importar el modelo de Usuario desde los modelos
import Usuario from '../models/Usuario'

// TODO: Manejo de errores

export const obtenerUsuarios = async (req, resp) => {
    try {
        const usuarios = await Usuario.find()
        resp.send(usuarios)
    } catch (error) {
        resp.json({
            message: error
        })
    }
}

export const crearUsuario = async (req, resp) => {
    // No se valida que la request esté vacía
    const datos = req.body.datos
    // Validación de todos los datos obligatorios del usuario
    let datosCorrectos = true;
    if (datos.nombre === null) datosCorrectos = false
    if (datos.apellido === null) datosCorrectos = false
    if (datos.direccion === null) datosCorrectos = false
    if (datos.ciudad === null) datosCorrectos = false
    if (datos.region === null) datosCorrectos = false
    if (datos.comuna === null) datosCorrectos = false

    if (datosCorrectos) {
        const nuevoUsuario = new Usuario({
            correo: req.body.correo,
            password: req.body.password,
            datos
        })
        try {
            const usuarioCreado = await nuevoUsuario.save()
            resp.json(usuarioCreado)
        } catch (error) {
            resp.status(400).json({ message: "Error al crear usuario" })
        }
    } else {
        resp.status(400).json({ mensaje: "Error con los datos ingresados" })
    }
}

export const obetenerUsuarioPorCorreo = async (req, resp) => {
    if (!req.body.correo) {
        resp.status(404).json({ mensaje: "No se ingresó correo" })
    }
    else {
        try {
            const usuario = await Usuario.findOne({ correo: req.body.correo })
            if (!usuario) {
                resp.status(404).json({ mensaje: `Error al encontrar usuario con el correo ${req.body.correo}` })
            }
            else {
                resp.json(usuario)
            }
        } catch (error) {
            resp.json({ message: error })
        }
    }
}

export const actualizarDireccionEnvio = async (req, resp) => {
    const datosActualizados = await Usuario.findByIdAndUpdate(req.body.id, req.body)
    resp.json(datosActualizados)
}