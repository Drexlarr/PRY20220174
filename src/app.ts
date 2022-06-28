import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import UsuarioRoutes from './routes/Usuario.routes'

const path = require("path");
const app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerSpec = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Proyecto",
            version: "1.0.0"
        },
        servers: [
            {
                url: "http://localhost:3000"
            }
        ]
    },
    apis: [`${path.join(__dirname, "./routes/*.routes.ts")}`]
}

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use('/api', UsuarioRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsDoc(swaggerSpec)));

export default app;
