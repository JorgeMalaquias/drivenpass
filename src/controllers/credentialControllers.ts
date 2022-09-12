import { Request, Response } from "express";
import * as credentialService from "../services/credentialService"


export async function creatingCredential(req:Request, res:Response){
    await credentialService.creatingCredential(req.body);
    res.sendStatus(201);
}