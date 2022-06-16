import { Schema, model } from 'mongoose'

//  DEFINICIÓN DEL MODELO A UTILIZAR <=> CLASE EN POO

const UsuarioSchema = new Schema({
    correo: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    datos: {
        type: Object,
    }
}, {
    versionKey: false,
    timestamps: true
})

export default model('Usuario', UsuarioSchema)