import * as credentialRepository from "../repositories/credentialRepository";
import { ICredentialReqBody } from "../types/credentialTypes";
import * as userService from "../services/userService";
import Cryptr from "cryptr";



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

