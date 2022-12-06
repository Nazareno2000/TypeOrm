import "reflect-metadata"
import app from "./app"
import {AppDataSource} from "./db"

async function main ()
{
    try {
        await AppDataSource.initialize() //arranca conexion
    console.log("Conectado")
    app.listen(3000)
    console.log('servidor escuchando en el puerto',3000)
        
    } catch (error) {
        console.error(error)
        
    }
    
}
main()