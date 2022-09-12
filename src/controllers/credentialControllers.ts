import { Request, Response } from "express";
import * as credentialService from "../services/credentialService"

//creating
export async function creatingCredential(req:Request, res:Response){
    await credentialService.creatingCredential(req.body);
    res.sendStatus(201);
}

//gettingOne
export async function gettingOneCredential(req:Request, res:Response){
    const credential = await credentialService.gettingOneCredential(res.locals.userEmail,Number(req.params.id));
    res.send(credential);
}

//gettingAll
export async function gettingAll(req:Request, res:Response){
    const credentials = await credentialService.gettingAllCredential(res.locals.userEmail);
    res.send(credentials);
}

//delete
export async function deleteCredential(req:Request, res:Response){
    await credentialService.deleteCredential(res.locals.userEmail,Number(req.params.id));
    res.sendStatus(200);
}