import { Request, Response } from "express";

const prueba = async (req: Request, res: Response) => {
    console.log(req.body);
    
    return res.status(200).send('okok');
}

export {prueba}