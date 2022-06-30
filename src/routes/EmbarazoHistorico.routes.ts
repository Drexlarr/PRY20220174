import { Router } from "express";
import {
    createEmbarazoHistorico,
    deleteEmbarazoHistorico,
    getEmbarazoHistoricoById,
    updateEmbarazoHistorico,
} from "../controllers/EmbarazoHistorico.controllers";

const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *      EmbarazoHistorico:
 *          type: object
 *          properties:
 *              embCodigo:
 *                  type: integer
 *              embHPeso:
 *                  type: integer
 *              embHPresionArterial:
 *                  type: integer
 *              embHNumSemana:
 *                  type: integer
 *
 *          required:
 *              - embCodigo
 *              - embHPeso
 *              - embHPresionArterial
 *              - embHNumSemana
 *          example:
 *              embCodigo: 2
 *              embHPeso: 70
 *              embHPresionArterial: 130
 *              embHNumSemana: 15
 */

/**
 * @swagger
 * /api/embarazos-historicos/{id}:
 *  post:
 *      summary: Registra un nuevo embarazo histórico a partir del id de un embarazo existente
 *      tags: [EmbarazoHistorico]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: El id del embarazo
 *      responses:
 *          200:
 *              description: Se registró el embarazo histórico
 *  */
router.post("/embarazos-historicos/:id", createEmbarazoHistorico);

/**
 * @swagger
 * /api/embarazos-historicos/{id}:
 *  put:
 *      summary: Actualiza un embarazo histórico por Id
 *      tags: [EmbarazoHistorico]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: El id del embarazo histórico
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                        embHPeso:
 *                            type: integer
 *                        embHPresionArterial:
 *                            type: integer
 *                        embHNumSemana:
 *                            type: integer
 *                      example:
 *                        embHPeso: 70
 *                        embHPresionArterial: 130
 *                        embHNumSemana: 15
 *      responses:
 *          200:
 *              description: Se actualizó el embarazo histórico
 *          404:
 *              description: Embarazo histórico no encontrado
 *
 * */
router.put("/embarazos-historicos/:id", updateEmbarazoHistorico);

/**
 * @swagger
 * /api/embarazos-historicos/{id}:
 *  delete:
 *      summary: Elimina un embarazo histórico por id
 *      tags: [EmbarazoHistorico]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: El id del embarazo histórico
 *      responses:
 *          200:
 *              description: Se eliminó el embarazo histórico
 *          404:
 *              description: Embarazo histórico no encontrado
 *  */
router.delete("/embarazos-historicos/:id", deleteEmbarazoHistorico);

/**
 * @swagger
 * /api/embarazos-historicos/{id}:
 *  get:
 *      summary: Retorna un embarazo histórico a partir de un id
 *      tags: [EmbarazoHistorico]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: El id del embarazo histórico
 *      responses:
 *          200:
 *              description: Se obtuvo un embarazo histórico
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                            embHFechaModif:
 *                                type: date
 *                            embHPeso:
 *                                type: integer
 *                            embHPresionArterial:
 *                                type: integer
 *                            embHNumSemana:
 *                                type: integer
 *                          example:
 *                            embHFechaModif:  2000-12-10T00:00:00.000Z
 *                            embHPeso: 70
 *                            embHPresionArterial: 130
 *                            embHNumSemana: 15
 *  */
router.get("/embarazos-historicos/:id", getEmbarazoHistoricoById);

export default router;
