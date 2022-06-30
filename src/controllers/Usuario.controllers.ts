import { Request, Response } from "express";
import { userInfo } from "os";
import { Usuario } from "../models/Usuario";
import bcrypt = require("bcrypt");

export const createUsuario = async (req: Request, res: Response) => {
    try {
        const { usrNombre, usrCodColegiatura, usrCorreo, usrPsswd, usrNacimiento, usrType } =
            req.body;

        const salt = await bcrypt.genSalt(10);
        const usuario = new Usuario();
        usuario.usrNombre = usrNombre;
        usuario.usrCodColegiatura = usrCodColegiatura;
        usuario.usrCorreo = usrCorreo;
        usuario.usrPsswd = await bcrypt.hash(usrPsswd, salt);
        usuario.usrNacimiento = new Date(usrNacimiento);
        usuario.usrType = usrType;

        await usuario.save();

        return res.status(200).json({
            message: "El usuario fue registrado",
            status: "200",
        });
    } catch (error) {
        if (error instanceof Error) {
            return res.sendStatus(500).json({ message: error.message });
        }
    }
};

export const getUsuarios = async (req: Request, res: Response) => {
    try {
        const usuarios = await Usuario.find();
        return res.status(200).json({
            message: "Usuarios obtenidos",
            status: "200",
        });
    } catch (error) {
        if (error instanceof Error) {
            return res.sendStatus(500).json({ message: error.message });
        }
    }
};

export const updateUsuario = async (req: Request, res: Response) => {
    try {
        const { usrNombre, usrCodColegiatura, usrCorreo, usrNacimiento, usrType } = req.body;

        const usuario = await Usuario.findOneBy({
            usrCodigo: parseInt(req.params.id),
        });

        if (!usuario) return res.status(404).json({ message: "El usuario no existe" });

        usuario.usrNombre = usrNombre;
        usuario.usrCodColegiatura = usrCodColegiatura;
        usuario.usrCorreo = usrCorreo;
        usuario.usrNacimiento = new Date(usrNacimiento);
        usuario.usrType = usrType;

        await usuario.save();

        return res.status(200).json({
            message: "El usuario fue actualizado",
            status: "200",
        });
    } catch (error) {
        if (error instanceof Error) {
            return res.sendStatus(500).json({ message: error.message });
        }
    }
};

export const deleteUsuario = async (req: Request, res: Response) => {
    try {
        const result = await Usuario.delete({ usrCodigo: parseInt(req.params.id) });

        if (result.affected === 0) return res.status(404).json({ message: "El usuario no existe" });

        return res.status(200).json({
            message: "El usuario fue eliminado",
            status: "200",
        });
    } catch (error) {
        if (error instanceof Error) {
            return res.sendStatus(500).json({ message: error.message });
        }
    }
};

export const test = async (req: Request, res: Response) => {
    return res.status(200).json({
        cryptMessage: "funciono",
    });
};
