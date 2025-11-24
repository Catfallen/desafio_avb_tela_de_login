export interface SendMailDTO{
    to:string;
    subject: string,
    text?:string,
    html?:string
}