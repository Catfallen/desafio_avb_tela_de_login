// utils/mailer.ts
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

import { SendMailDTO } from "../models/SendMailDTO";

export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export async function sendMail(data: SendMailDTO) {
    try {
        const info = await transporter.sendMail({
            from: `<${process.env.EMAIL_USER}>`,
            to: data.to,
            subject: data.subject,
            text: data.text,
            html: data.html,
        });

        console.log("Email enviado:", info.messageId);
        return info;
    } catch (err) {
        console.error("Erro ao enviar email:", err);
        throw err;
    }
}
