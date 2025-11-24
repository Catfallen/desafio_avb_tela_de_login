import dotenv from 'dotenv';
dotenv.config()
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";


import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";
const app = express();

app.use(express.json());

app.use(cors());
app.use(cookieParser());

//app.use("/auth",authRoutes);
app.use('/user',userRoutes);

app.get('/api',(req,res)=>{
    res.json({message: "Back-end funcionando"})
});

app.listen(3000,()=>{
    console.log('servidor rodando http://localhost:3000');
})