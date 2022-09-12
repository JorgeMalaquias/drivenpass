import { Request, Response } from "express";
import * as noteService from "../services/noteServices"

//creating
export async function creatingNote(req:Request, res:Response){
    await noteService.creatingNote(req.body);
    res.sendStatus(201);
}

//gettingOne
export async function gettingOneNote(req:Request, res:Response){
    const note = await noteService.gettingOneNote(res.locals.userEmail,Number(req.params.id));
    res.send(note);
}

//gettingAll
export async function gettingAll(req:Request, res:Response){
    const notes = await noteService.gettingAllNote(res.locals.userEmail);
    res.send(notes);
}

//delete
export async function deleteNote(req:Request, res:Response){
    await noteService.deleteNote(res.locals.userEmail,Number(req.params.id));
    res.sendStatus(200);
}