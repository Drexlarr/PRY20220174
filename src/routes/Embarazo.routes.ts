import { Router } from "express";
import {
    createEmbarazo,
    deleteEmbarazo,
    getEmbarazoById,
    updateEmbarazo,
} from "../controllers/Embarazo.controllers";

const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *      Embarazo:
 *          type: object
 *          properties:
 *              usrCodigo:
 *                  type: integer
 *              embCodigoObstetra:
 *                  type: integer
 *              embPeso:
 *                  type: integer
 *              embPresionArterial:
 *                  type: integer
 *              embNumSemana:
 *                  type: integer
 *              embEstado:
 *                  type: integer
 *
 *          required:
 *              - usrCodigo
 *              - embCodigoObstetra
 *              - embPeso
 *              - embPresionArterial
 *              - embNumSemana
 *              - embEstado
 *          example:
 *              usrCodigo: 1
 *              embCodigoObstetra: 2
 *              embPeso: 70
 *              embPresionArterial: 130
 *              embNumSemana: 15
 *              embEstado: 1
 */

/**
 * @swagger
 * /api/embarazos:
 *  post:
 *      summary: Registra un nuevo embarazo
 *      tags: [Embarazo]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Embarazo'
 *      responses:
 *          200:
 *              description: Se registró el embarazo
 *  */
router.post("/embarazos", createEmbarazo);

/**
 * @swagger
 * /api/embarazos/{id}:
 *  put:
 *      summary: Actualiza un embarazo por Id
 *      tags: [Embarazo]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: El id del embarazo
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                        embCodigoObstetra:
 *                            type: integer
 *                        embPeso:
 *                            type: integer
 *                        embPresionArterial:
 *                            type: integer
 *                        embNumSemana:
 *                            type: integer
 *                        embEstado:
 *                            type: integer
 *                      example:
 *                        embCodigoObstetra: 2
 *                        embPeso: 70
 *                        embPresionArterial: 130
 *                        embNumSemana: 15
 *                        embEstado: 1
 *      responses:
 *          200:
 *              description: Se actualizó el embarazo
 *          404:
 *              description: Embarazo no encontrado
 *
 *  */
router.put("/embarazos/:id", updateEmbarazo);

/**
 * @swagger
 * /api/embarazos/{id}:
 *  delete:
 *      summary: Elimina un embarazo por id
 *      tags: [Embarazo]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: El id del embarazo
 *      responses:
 *          200:
 *              description: Se eliminó el embarazo
 *          404:
 *              description: Embarazo no encontrado
 *  */
router.delete("/embarazos/:id", deleteEmbarazo);

/**
 * @swagger
 * /api/embarazos/{id}:
 *  get:
 *      summary: Retorna un embarazo a partir de un id
 *      tags: [Embarazo]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: El id del embarazo
 *      responses:
 *          200:
 *              description: Se obtuvo un embarazo
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Embarazo'
 *  */
router.get("/embarazos/:id", getEmbarazoById);

export default router;
