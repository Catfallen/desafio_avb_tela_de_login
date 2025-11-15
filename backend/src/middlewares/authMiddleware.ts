import { verifyToken } from "../utils/token";
import { Request,Response,NextFunction } from "express";
export default function authMiddleware(req:Request,res:Response,next:NextFunction){
    try{
        const authHeader:string = req.headers['authorization'];
        if(!authHeader){
            return res.status(401).json({message:"Token não fornecido"});
        }
        next();
    }catch(err){
        return res.status(500).json({'erro':err})
    }
}