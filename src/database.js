// Este sript solo realiza la conexión a la BD
import mongoose from "mongoose";
// Se exportan las configuraciones
import config from "./config";

(async () => {
    try {
        //  Realizar la conexión a la BD desde la URL dada en config
        const db = await mongoose.connect(config.mongodbURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('La base de datos está conectada a:', db.connection.name)
    } catch (error) {
        console.log(error)
    }
})();
