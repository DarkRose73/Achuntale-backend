import Compra from "../models/Compra";

export const obtenerCompras = async (req, resp) => {
    try {
        const compras = await Compra.find()
        resp.json(compras)
    } catch (error) {
        resp.json(error)
    }
}

export const crearCompra = async (req, resp) => {
    const datosCompra = req.body;
    const nuevaCompra = new Compra({
        ...datosCompra,
        estadoCompra: true
    })
    try {
        await nuevaCompra.save()
        resp.json(nuevaCompra)
    } catch (error) {
        resp.status(400).json({ message: "Error al registrar compra" })
    }
}