import * as wifiRepository from "../repositories/wifiRepository";
import { IWifiBody } from "../types/wifiTypes";
import * as userService from "../services/userService";
import Cryptr from "cryptr";


//creating
export async function creatingWifi({title,name,password,userId}:IWifiBody){
    await userService.verifyingUserById(userId);
    await wifiRepository.storing({title,name,password:encripting(password),userId});
}


//gettingOne

export async function gettingOneWifi(userEmail:string,id:number){
    const user = await userService.checkingEmail(userEmail);
    const wifi = await wifiRepository.gettingOnewifi(id,user.id);;
    if(wifi===null){
        throw ({ type: 'not_found', message: 'This wifi does not exist or belong to this user' });

    }
    return {...wifi,password:decripting(wifi.password)};
}


//gettingAll

export async function gettingAllWifi(userEmail:string){
    const user = await userService.checkingEmail(userEmail);
    const wifis = await wifiRepository.gettingAll(user.id);;
    if(wifis===null){
        throw ({ type: 'not_found', message: 'This wifi does not exist or belong to this user' });
    }
    const data = wifis.map((w:any)=> {return {...w,password:decripting(w.password)}})
    return data;
}

//deletingOne

export async function deleteWifi(userEmail:string,id:number){
    const user = await userService.checkingEmail(userEmail);
    const wifi = await wifiRepository.gettingOnewifi(id,user.id);
    if(wifi===null){
        throw ({ type: 'not_found', message: 'This wifi does not exist or belong to this user' });

    }
    await wifiRepository.deletewifi(id);
}

function encripting(string:string):string{
    const cryptr: any = new Cryptr('SECRET_KEY');
    const encryptedString = cryptr.encrypt(string);
    return encryptedString;
}
function decripting(string:string):string{
    const cryptr: any = new Cryptr('SECRET_KEY');
    const decryptedstring = cryptr.decrypt(string);
    return decryptedstring;
}