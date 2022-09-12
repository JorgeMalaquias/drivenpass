import { Request, Response } from "express";
import * as userService from "../services/userService"

export async function registering(req:Request, res:Response){
    const {email,password} = req.body;
    await userService.registering({email,password});
    res.sendStatus(201);
}
export async function logging(req:Request, res:Response){
    const {email,password} = req.body;
    const token = await userService.logging({email,password});
    res.status(200).send(token);
}