import { Router } from 'express'


const router = Router()

//  DEFINICIÓN DE LAS DISTINTAS RUTAS A UTILIZAR

// Obtener comunas por region
router.get('/', (req, res) => {
    const region = req.body.region
    if (region == "Valparaíso") {
        res.json({
            comunas: [
                "Algarrobo",
                "Cabildo",
                "Calle Larga",
                "Cartagena",
                "Casablanca",
                "Catemu",
                "Limache",
                "Quillota",
                "Quilpué",
                "Valparaíso",
                "Viña del mar",
            ]
        })
    } else if (region == "Santiago") {
        res.json({
            comunas: [
                "Buin",
                "Calera de Tango",
                "Colina",
                "Conchalí",
                "El Bosque",
                "Estación Central",
                "Huechuraba",
                "Las Condes",
                "Maipú",
                "San Ramón",
                "Vitacura",
            ]
        })
    }
})

export default router