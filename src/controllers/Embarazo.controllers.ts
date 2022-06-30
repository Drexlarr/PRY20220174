import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { Usuario } from "../models/Usuario";
import { Embarazo } from "../models/Embarazo";

export const createEmbarazo = async (req: Request, res: Response) => {
    try {
        const {
            usrCodigo,
            embCodigoObstetra,
            embPeso,
            embPresionArterial,
            embNumSemana,
            embEstado,
        } = req.body;

        const usuario = await Usuario.findOneBy({
            usrCodigo: parseInt(usrCodigo),
        });

        if (!usuario) {
            return res.status(404).json({ message: "El usuario no existe" });
        }

        if (usuario.usrType != 0) {
            return res.status(404).json({ message: "El usuario no es de tipo gestante" });
        }

        const obstetra = await Usuario.findOneBy({
            usrCodigo: parseInt(embCodigoObstetra),
        });

        if (!obstetra) {
            return res.status(404).json({ message: "La obstetra no existe" });
        }

        if (obstetra.usrType != 1) {
            return res
                .status(404)
                .json({ message: "El código de obstetra ingresado no es de una obstetra" });
        }

        const embarazo = new Embarazo();

        embarazo.usuario = usuario;
        embarazo.obstetra = obstetra;
        embarazo.embEstado = embEstado;
        embarazo.embNumSemana = embNumSemana;
        embarazo.embPeso = embPeso;
        embarazo.embPresionArterial = embPresionArterial;

        await embarazo.save();

        return res.status(200).json({
            message: "El embarazo fue registrado",
            status: "200",
        });
    } catch (error) {
        if (error instanceof Error) {
            return res.sendStatus(500).json({ message: error.message });
        }
    }
};

export const getEmbarazoById = async (req: Request, res: Response) => {
    try {
        const embarazo = await Embarazo.findOne({
            where: { embCodigo: parseInt(req.params.id) },
            relations: ["obstetra", "usuario"],
        });

        if (!embarazo) {
            return res.status(404).json({ message: "El embarazo no existe" });
        }

        const { obstetra, usuario, embPeso, embPresionArterial, embNumSemana, embEstado } =
            embarazo;

        return res.status(200).json({
            usrCodigo: obstetra.usrCodigo,
            embCodigoObstetra: obstetra.usrCodigo,
            embPeso: embPeso,
            embPresionArterial: embPresionArterial,
            embNumSemana: embNumSemana,
            embEstado: embEstado,
        });
    } catch (error) {
        if (error instanceof Error) {
            return res.sendStatus(500).json({ message: error.message });
        }
    }
};

export const updateEmbarazo = async (req: Request, res: Response) => {
    try {
        const { embCodigoObstetra, embPeso, embPresionArterial, embNumSemana, embEstado } =
            req.body;

        const salt = await bcrypt.genSalt(10);

        const embarazo = await Embarazo.findOneBy({
            embCodigo: parseInt(req.params.id),
        });

        if (!embarazo) {
            return res.status(404).json({ message: "El embarazo no existe" });
        }
        const obstetra = await Usuario.findOneBy({
            usrCodigo: parseInt(embCodigoObstetra),
        });

        if (!obstetra) {
            return res.status(404).json({ message: "La obstetra no existe" });
        }

        if (obstetra.usrType != 1) {
            return res
                .status(404)
                .json({ message: "El código de obstetra ingresado no es de una obstetra" });
        }

        embarazo.obstetra = obstetra;
        embarazo.embEstado = embEstado;
        embarazo.embNumSemana = embNumSemana;
        embarazo.embPeso = embPeso;
        embarazo.embPresionArterial = embPresionArterial;

        await embarazo.save();

        return res.status(200).json({
            message: "El embarazo fue actualizado",
            status: "200",
        });
    } catch (error) {
        if (error instanceof Error) {
            return res.sendStatus(500).json({ message: error.message });
        }
    }
};

export const deleteEmbarazo = async (req: Request, res: Response) => {
    try {
        const result = await Embarazo.delete({ embCodigo: parseInt(req.params.id) });

        if (result.affected === 0)
            return res.status(404).json({ message: "El embarazo no existe" });

        return res.status(200).json({
            message: "El embarazo fue eliminado",
            status: "200",
        });
    } catch (error) {
        if (error instanceof Error) {
            return res.sendStatus(500).json({ message: error.message });
        }
    }
};
