import { Request, Response } from "express";
import { Usuario } from "../models/Usuario";
import { UsuarioCreateDTO } from "../models/UsuarioCreateDTO";
import { prisma } from "../config/prisma.config";

export default {
    async index(req: Request, res: Response) {
        try {
            const usuarios: Usuario[] = await prisma.usuario.findMany();
            return res.json(usuarios);
        } catch (err) {
            return res.status(500).json({ error: "Erro ao listar usuários" });
        }
    }
};
