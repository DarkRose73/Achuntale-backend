import app from "./app"
// Importación de la BD, para realizar la conexión
import './database'

app.listen(app.get('port'))
console.log('Server on port:', app.get('port'))