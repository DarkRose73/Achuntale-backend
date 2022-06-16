// Importar el modelo de Usuario desde los modelos
import Usuario from '../models/Usuario'

export const obtenerUsuarios = async (req, resp) => {
    const usuarios = await Usuario.find()
    resp.send(usuarios)
}

export const crearUsuario = async (req, resp) => {
    const nuevoUsuario = new Usuario({
        correo: req.body.correo,
        password: req.body.password,
        datos: req.body.datos
    })
    const usuarioCreado = await nuevoUsuario.save()
    resp.json(usuarioCreado)
}

export const obetenerUsuarioPorCorreo = async (req, resp) => {
    const usuario = await Usuario.findOne({ correo: req.body.correo })
    resp.json(usuario)
}