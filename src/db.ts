import { DataSource } from "typeorm";
import { Embarazo } from "./models/Embarazo";
import { EmbarazoHistorico } from "./models/EmbarazoHistorico";
import { Usuario } from "./models/Usuario";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    username: "root",
    password: "root1234",
    port: 3306,
    database: "PRY20220174",
    entities: [Usuario, Embarazo, EmbarazoHistorico],
    logging: true,
});
