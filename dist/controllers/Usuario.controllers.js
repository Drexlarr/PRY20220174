"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUsuario = void 0;
const Usuario_1 = require("../models/Usuario");
const createUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { usrNombre, usrCodColegiatura, usrCorreo, usrPsswd, usrNacimiento, usrType } = req.body;
    const usuario = new Usuario_1.Usuario();
    usuario.usrNombre = usrNombre;
    usuario.usrCodColegiatura = usrCodColegiatura;
    usuario.usrCorreo = usrCorreo;
    usuario.usrPsswd = usrPsswd;
    usuario.usrNacimiento = usrNacimiento;
    usuario.usrType = usrType;
    yield usuario.save();
    res.send('Hello world');
});
exports.createUsuario = createUsuario;
