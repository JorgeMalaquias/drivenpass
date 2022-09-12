import * as credentialRepository from "../repositories/credentialRepository";
import { ICredentialReqBody } from "../types/credentialTypes";
import * as userService from "../services/userService";
import Cryptr from "cryptr";


//creating
export async function creatingCredential({name,url,userName,password,userId}:ICredentialReqBody){
    await userService.verifyingUserById(userId);
    await checkingName(name,userId);
    await credentialRepository.storing({name,url,userName,password:encripting(password),userId});
}


async function checkingName(name:string,userId:number){
    const credential = await credentialRepository.gettingCredentialByName(name,userId);
    if(credential!==null){
        throw ({ type: 'conflict', message: 'This credential name is already been used' });
    }
}

function encripting(password:string):string{
    const cryptr: any = new Cryptr('SECRET_KEY');
    const encryptedPassword = cryptr.encrypt(password);
    return encryptedPassword;
}

//gettingOne

export async function gettingOneCredential(userEmail:string,id:number){
    const user = await userService.checkingEmail(userEmail);
    const credential = await credentialRepository.gettingOneCredential(id,user.id);;
    if(credential===null){
        throw ({ type: 'not_found', message: 'This credential does not exist or belong to this user' });

    }
    return {...credential,password:decripting(credential.password)};
}

function decripting(password:string):string{
    const cryptr: any = new Cryptr('SECRET_KEY');
    const decryptedPassword = cryptr.decrypt(password);
    return decryptedPassword;
}

//gettingAll

export async function gettingAllCredential(userEmail:string){
    const user = await userService.checkingEmail(userEmail);
    const credentials = await credentialRepository.gettingAll(user.id);;
    if(credentials===null){
        throw ({ type: 'not_found', message: 'This credential does not exist or belong to this user' });
    }
    const data = credentials.map((c)=> {return {...c,password:decripting(c.password)}})
    return data;
}

//gettingOne

export async function deleteCredential(userEmail:string,id:number){
    const user = await userService.checkingEmail(userEmail);
    const credential = await credentialRepository.gettingOneCredential(id,user.id);
    if(credential===null){
        throw ({ type: 'not_found', message: 'This credential does not exist or belong to this user' });

    }
    await credentialRepository.deleteCredential(id);
}