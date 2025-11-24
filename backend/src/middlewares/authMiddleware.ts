import { verifyToken } from "../utils/token";
import { Request,Response,NextFunction } from "express";
import { TokenDecoded } from "../models/TokenDecoded";
export default function authMiddleware(req:Request,res:Response,next:NextFunction){
    try{
        const authHeader:string = req.headers['authorization'];
        if(!authHeader){
            return res.status(401).json({message:"Token não fornecido"});
        }
        const token = req.cookies?.token || authHeader.split(" ")[1];
        try{
            const decoded:TokenDecoded = verifyToken(token);
            req.userId = decoded.id;
            next();
        }catch(err){
            return res.status(403).json({'msg':"Token invalido ou expirado"});
        }

       
    }catch(err){
        return res.status(500).json({'erro':err})
    }
}