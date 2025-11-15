import { Request,Response } from "express";

export async function login(req: Request,res: Response) {
    try{
        const {email,senha} = req.body as {email:string,senha:string};

        return res.status(200).json({email,senha});
    }catch(err){
        return res.status(500).json({ erro: err?.message || err });
    }
}



module.exports = {login};