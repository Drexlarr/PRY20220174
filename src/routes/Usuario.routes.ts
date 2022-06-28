import { Router } from "express";
import { createUsuario, deleteUsuario, getUsuarios, updateUsuario, test } from "../controllers/Usuario.controllers"

const router = Router();

/**
 * @swagger
 * components:
 *  schemas: 
 *      Usuario: 
 *          type: object
 *          properties:
 *              usrNombre:
 *                  type: string
 *              usrCodColegiatura:
 *                  type: integer
 *              usrCorreo:
 *                  type: string
 *              usrPsswd:
 *                  type: string
 *              usrNacimiento:
 *                  type: date
 *              usrType:
 *                  type: integer
 *          
 *          required:
 *              - usrNombre
 *              - usrCorreo
 *              - usrPsswd
 *              - usrNacimiento
 *              - usrType
 *          example:
 *              usrNombre: Diego            
 *              usrCodColegiatura: 1
 *              usrCorreo: diego@gmail.com 
 *              usrPsswd: hola
 *              usrNacimiento: 2000-12-10T00:00:00.000Z
 *              usrType: 1
 */

/**
 * @swagger
 * /api/usuarios:
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
 *      responses:
 *          200:
 *              description: Se registró el usuario
 *  */
router.post('/usuarios', createUsuario);

/**
 * @swagger
 * /api/usuarios:
 *  get:
 *      summary: Retorna todos los usuarios
 *      tags: [Usuario]
 *      responses:
 *          200:
 *              description: Se obtuvo todos los usuarios
 *              content:
 *                  application/json:
 *                      schema: 
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Usuario'
 *  */
router.get('/usuarios', getUsuarios);

/**
 * @swagger
 * /api/usuarios/{id}:
 *  put:
 *      summary: Actualiza un usuario por Id
 *      tags: [Usuario]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: El id del usuario
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          usrNombre:
 *                              type: string
 *                          usrCodColegiatura:
 *                              type: integer
 *                          usrCorreo:
 *                              type: string
 *                          usrNacimiento:
 *                              type: date
 *                          usrType:
 *                              type: integer
 *                      
 *                      required:
 *                          - usrNombre
 *                          - usrCorreo
 *                          - usrNacimiento
 *                          - usrType
 *                      example:
 *                          usrNombre: Diego            
 *                          usrCodColegiatura: 1
 *                          usrCorreo: diego@gmail.com 
 *                          usrNacimiento: 2000-12-10T00:00:00.000Z
 *                          usrType: 1
 *      responses:
 *          200:
 *              description: Se actualizó el usuario
 *          404:
 *              description: Usuario no encontrado
 *  */
router.put('/usuarios/:id', updateUsuario);

/**
 * @swagger
 * /api/usuarios/{id}:
 *  delete:
 *      summary: Elimina un usuario por id
 *      tags: [Usuario]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: El id del usuario 
 *      responses:
 *          200:
 *              description: Se eliminó el usuario
 *          404:
 *              description: Usuario no encontrado
 *  */
router.delete('/usuarios/:id', deleteUsuario);

router.post('/encrypt', test);
export default router;