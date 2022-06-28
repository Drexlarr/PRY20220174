"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const Usuario_1 = require("./models/Usuario");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: 'localhost',
    username: 'root',
    password: 'root1234',
    port: 3306,
    database: 'PRY20220174',
    entities: [Usuario_1.Usuario],
    logging: true,
    synchronize: true
});
