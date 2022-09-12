import { Request, Response } from "express";
import * as wifiService from "../services/wifiServices"

//creating
export async function creatingWifi(req:Request, res:Response){
    await wifiService.creatingWifi(req.body);
    res.sendStatus(201);
}

//gettingOne
export async function gettingOneWifi(req:Request, res:Response){
    const wifi = await wifiService.gettingOneWifi(res.locals.userEmail,Number(req.params.id));
    res.send(wifi);
}

//gettingAll
export async function gettingAll(req:Request, res:Response){
    const wifis = await wifiService.gettingAllWifi(res.locals.userEmail);
    res.send(wifis);
}

//delete
export async function deleteWifi(req:Request, res:Response){
    await wifiService.deleteWifi(res.locals.userEmail,Number(req.params.id));
    res.sendStatus(200);
}