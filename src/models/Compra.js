import { Schema, model } from 'mongoose'

//  DEFINICIÓN DEL MODELO A UTILIZAR <=> CLASE EN POO

const CompraSchema = new Schema({
    correoComprador: {
        type: String,
        required: true,
        trim: true,
    },
    cantidadCompra: {
        type: Number,
        required: true
    },
    totalCompra: {
        type: Number
    },
    datosComprador: {
        type: Object,
        required: true
    },
    estadoCompra: {
        type: Boolean
    }
}, {
    versionKey: false,
    timestamps: true
})

export default model('Compra', CompraSchema)