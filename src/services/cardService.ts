import * as cardRepository from "../repositories/cardRepository";
import { ICardBody } from "../types/cardTypes";
import * as userService from "../services/userService";
import Cryptr from "cryptr";


//creating
export async function creatingCard({title,number,name,securityCode,expirationDate,password,isVirtual,type,userId}:ICardBody){
    await userService.verifyingUserById(userId);
    await checkingName(name,userId);
    await cardRepository.storing({title,number,name,securityCode:encripting(securityCode),expirationDate,password:encripting(password),isVirtual,type,userId});
}


async function checkingName(name:string,userId:number){
    const card = await cardRepository.gettingCardByName(name,userId);
    if(card!==null){
        throw ({ type: 'conflict', message: 'This card name is already been used' });
    }
}

function encripting(string:string):string{
    const cryptr: any = new Cryptr('SECRET_KEY');
    const encryptedString = cryptr.encrypt(string);
    return encryptedString;
}

//gettingOne

export async function gettingOneCard(userEmail:string,id:number){
    const user = await userService.checkingEmail(userEmail);
    const card = await cardRepository.gettingOneCard(id,user.id);;
    if(card===null){
        throw ({ type: 'not_found', message: 'This card does not exist or belong to this user' });

    }
    return {...card,password:decripting(card.password),securityCode:decripting(card.securityCode)};
}

function decripting(string:string):string{
    const cryptr: any = new Cryptr('SECRET_KEY');
    const decryptedstring = cryptr.decrypt(string);
    return decryptedstring;
}

//gettingAll

export async function gettingAllCard(userEmail:string){
    const user = await userService.checkingEmail(userEmail);
    const cards = await cardRepository.gettingAll(user.id);;
    if(cards===null){
        throw ({ type: 'not_found', message: 'This card does not exist or belong to this user' });
    }
    const data = cards.map((c)=> {return {...c,password:decripting(c.password),securityCode:decripting(c.securityCode)}})
    return data;
}

//gettingOne

export async function deleteCard(userEmail:string,id:number){
    const user = await userService.checkingEmail(userEmail);
    const card = await cardRepository.gettingOneCard(id,user.id);
    if(card===null){
        throw ({ type: 'not_found', message: 'This card does not exist or belong to this user' });

    }
    await cardRepository.deleteCard(id);
}