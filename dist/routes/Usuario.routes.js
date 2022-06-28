"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Usuario_controllers_1 = require("../controllers/Usuario.controllers");
const router = (0, express_1.Router)();
/**
 * @swagger
 * components:
 *  schemas:
 *      Usuario:
 *          type: object
 *          properties:
 *              usrName:
 *                  type: string
 *                  description: Username
 *          required:
 *              - usrName
 *          example:
 *              usrName: Diego
 */
/**
 * @swagger
 * /api/users:
 *  post:
 *      summary: Crea un nuevo usuario
 *      tags: [Usuario]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Usuario'
 */
router.post('/users', Usuario_controllers_1.createUsuario);
exports.default = router;
