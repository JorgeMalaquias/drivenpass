import * as noteRepository from "../repositories/noteRepository";
import { INoteBody } from "../types/noteTypes";
import * as userService from "../services/userService";
import Cryptr from "cryptr";


//creating
export async function creatingNote({title,text,userId}:INoteBody){
    await userService.verifyingUserById(userId);
    await checkingName(title,userId);
    await noteRepository.storing({title,text,userId});
}


async function checkingName(name:string,userId:number){
    const note = await noteRepository.gettingNoteByName(name,userId);
    if(note!==null){
        throw ({ type: 'conflict', message: 'This Note title is already been used' });
    }
}

//gettingOne

export async function gettingOneNote(userEmail:string,id:number){
    const user = await userService.checkingEmail(userEmail);
    const note = await noteRepository.gettingOneNote(id,user.id);;
    if(note===null){
        throw ({ type: 'not_found', message: 'This Note does not exist or belong to this user' });

    }
    return {...note};
}


//gettingAll

export async function gettingAllNote(userEmail:string){
    const user = await userService.checkingEmail(userEmail);
    const notes = await noteRepository.gettingAll(user.id);;
    if(notes===null){
        throw ({ type: 'not_found', message: 'This Note does not exist or belong to this user' });
    }
    return notes;
}

//deletingOne

export async function deleteNote(userEmail:string,id:number){
    const user = await userService.checkingEmail(userEmail);
    const note = await noteRepository.gettingOneNote(id,user.id);
    if(note===null){
        throw ({ type: 'not_found', message: 'This Note does not exist or belong to this user' });

    }
    await noteRepository.deleteNote(id);
}