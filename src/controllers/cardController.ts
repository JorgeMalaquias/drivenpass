import { Request, Response } from "express";
import * as cardService from "../services/cardService"

//creating
export async function creatingCard(req:Request, res:Response){
    await cardService.creatingCard(req.body);
    res.sendStatus(201);
}

//gettingOne
export async function gettingOneCard(req:Request, res:Response){
    const card = await cardService.gettingOneCard(res.locals.userEmail,Number(req.params.id));
    res.send(card);
}

//gettingAll
export async function gettingAll(req:Request, res:Response){
    const cards = await cardService.gettingAllCard(res.locals.userEmail);
    res.send(cards);
}

//delete
export async function deleteCard(req:Request, res:Response){
    await cardService.deleteCard(res.locals.userEmail,Number(req.params.id));
    res.sendStatus(200);
}