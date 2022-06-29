// Importar el modelo de Usuario desde los modelos
import Usuario from '../models/Usuario'
const bcryptjs = require('bcrypt')

const validarContraseña = async (contraseña, hashGuardado) => {
    let compare = await bcryptjs.compare(contraseña, hashGuardado)
    return compare
}

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
    if ((datos.nombre || datos.apellido || datos.direccion || datos.ciudad || datos.region || datos.comuna) === null) datosCorrectos = false // Esto es mejor que muchos if
    // Realizar el hashing de la contraseña para guardarla en la bd
    const passwordHash = await bcryptjs.hash(req.body.password, 8)
    if (datosCorrectos) {
        const nuevoUsuario = new Usuario({
            correo: req.body.correo,
            password: passwordHash,
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

// Ahora a este middleware se le debe pasar la contraseña en el body
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
                // validar el hash con la contraseña que hay en la BD
                let compare = await validarContraseña(req.body.password, usuario.password)
                if (compare) {
                    resp.json(usuario)
                } else {
                    resp.json({ message: "Credenciales incorrectas" })
                }
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