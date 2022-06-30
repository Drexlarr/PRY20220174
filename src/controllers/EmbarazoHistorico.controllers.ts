import { Request, Response } from "express";
import { Embarazo } from "../models/Embarazo";
import { EmbarazoHistorico } from "../models/EmbarazoHistorico";

export const createEmbarazoHistorico = async (req: Request, res: Response) => {
    try {
        const embarazo = await Embarazo.findOneBy({
            embCodigo: parseInt(req.params.id),
        });

        if (!embarazo) {
            return res.status(404).json({ message: "El embarazo no existe" });
        }

        const embarazoHistorico = new EmbarazoHistorico();

        embarazoHistorico.embarazo = embarazo;
        embarazoHistorico.embHNumSemana = embarazo.embNumSemana;
        embarazoHistorico.embHPeso = embarazo.embPeso;
        embarazoHistorico.embHPresionArterial = embarazo.embPresionArterial;

        await embarazoHistorico.save();

        return res.status(200).json({
            message: "El embarazo histórico fue registrado",
            status: "200",
        });
    } catch (error) {
        if (error instanceof Error) {
            return res.sendStatus(500).json({ message: error.message });
        }
    }
};

export const getEmbarazoHistoricoById = async (req: Request, res: Response) => {
    try {
        const embarazoHistorico = await EmbarazoHistorico.findOne({
            where: { embHRegCodigo: parseInt(req.params.id) },
            relations: ["embarazo"],
        });

        if (!embarazoHistorico) {
            return res.status(404).json({ message: "El embarazo histórico no existe" });
        }

        const { embarazo, embHPeso, embHPresionArterial, embHNumSemana, embHFechaModif } =
            embarazoHistorico;

        return res.status(200).json({
            embHFechaModif: embHFechaModif,
            embCodigo: embarazo.embCodigo,
            embHPeso: embHPeso,
            embHPresionArterial: embHPresionArterial,
            embHNumSemana: embHNumSemana,
        });
    } catch (error) {
        if (error instanceof Error) {
            return res.sendStatus(500).json({ message: error.message });
        }
    }
};

export const updateEmbarazoHistorico = async (req: Request, res: Response) => {
    try {
        const { embHPeso, embHPresionArterial, embHNumSemana } = req.body;

        const embarazoHistorico = await EmbarazoHistorico.findOneBy({
            embHRegCodigo: parseInt(req.params.id),
        });

        if (!embarazoHistorico) {
            return res.status(404).json({ message: "El embarazo histórico no existe" });
        }

        embarazoHistorico.embHNumSemana = embHNumSemana;
        embarazoHistorico.embHPeso = embHPeso;
        embarazoHistorico.embHPresionArterial = embHPresionArterial;

        await embarazoHistorico.save();

        return res.status(200).json({
            message: "El embarazo histórico fue actualizado",
            status: "200",
        });
    } catch (error) {
        if (error instanceof Error) {
            return res.sendStatus(500).json({ message: error.message });
        }
    }
};

export const deleteEmbarazoHistorico = async (req: Request, res: Response) => {
    try {
        const result = await EmbarazoHistorico.delete({ embHRegCodigo: parseInt(req.params.id) });

        if (result.affected === 0)
            return res.status(404).json({ message: "El embarazo histórico no existe" });

        return res.status(200).json({
            message: "El embarazo histórico fue eliminado",
            status: "200",
        });
    } catch (error) {
        if (error instanceof Error) {
            return res.sendStatus(500).json({ message: error.message });
        }
    }
};
