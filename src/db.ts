import { DataSource } from "typeorm";
import { Usuario } from "./entidades/Usuario";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "NazaPost",
    database: "BaseDeDatoTYPEORM",
    entities: [Usuario],
    logging: true,
    subscribers: [],
    migrations: [],
    synchronize:true
    
})