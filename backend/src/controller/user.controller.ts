import { Request, Response } from "express";
import { prisma } from "../config/prisma.config";
import { UsuarioCreateDTO } from "../models/UsuarioCreateDTO";
import { hashPassword,comparePassword } from "../utils/hash";
import { generateToken } from "../utils/token";
import { Usuario } from "../models/Usuario";
import { UserLogin} from "../models/Login";
export default {
    // LISTAR TODOS
    async index(req: Request, res: Response) {
        console.log(req.userId);
        try {
            const usuarios:Usuario[] = await prisma.usuario.findMany();
            return res.json(usuarios);
        } catch (err) {
            return res.status(500).json({ error: "Erro ao listar usuários" });
        }
    },

    // MOSTRAR UM POR ID
    async login(req: Request, res: Response) {
        try {
            const data: UserLogin = req.body;

            const usuario = await prisma.usuario.findUnique({
                where: { email: data.email }
            });

            if (!usuario) {
                return res.status(404).json({ error: "Usuário não encontrado" });
            }
            const result:boolean = await comparePassword(data.senha,usuario.senha);
            if(!result){
                return res.status(401).json({'msg':"credenciais incorretas"});
            }
            const token:string = await generateToken({id:usuario.id,email:usuario.email})
            
            const {id,nome,email} = usuario;
            // --------------- 🔥 SETAR COOKIE COM O TOKEN ---------------
            res.cookie("token", token, {
            httpOnly: true,     // não acessível por JS -> segurança
            secure: false,      // true se usar HTTPS
            sameSite: "lax",    // permite navegação normal
            maxAge: 1000 * 60 * 60 * 24, // 24 horas
            path: "/"           // disponível para toda API
            });
        // -----------------------------------------------------------

            return res.json({id:id,nome:nome,email:email,token:token});
        } catch (err) {
            return res.status(500).json({ error: "Erro ao buscar usuário" });
        }
    },

    // CRIAR
    async register(req: Request, res: Response) {
    try {
        const data: UsuarioCreateDTO = req.body;
        console.log(req.body);
        console.log(data);
        
        // Hash da senha
        const hashed = await hashPassword(data.senha);
        data.senha = hashed;

        // Criação
        const usuario = await prisma.usuario.create({ data });

        // Gera token
        const token = generateToken({
            id: usuario.id,
            email: usuario.email
        });

        return res.status(201).json({
            usuario,
            token
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Erro ao criar usuário" });
    }
},

    // ATUALIZAR
    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const data = req.body;

            const usuario = await prisma.usuario.update({
                where: { id: Number(id) },
                data
            });

            return res.json(usuario);
        } catch (err) {
            return res.status(500).json({ error: "Erro ao atualizar usuário" });
        }
    },

    // DELETAR
    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;

            await prisma.usuario.delete({
                where: { id: Number(id) }
            });

            return res.json({ message: "Usuário deletado com sucesso" });
        } catch (err) {
            return res.status(500).json({ error: "Erro ao deletar usuário" });
        }
    }
};
