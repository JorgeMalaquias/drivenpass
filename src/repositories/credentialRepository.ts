import { prisma } from "../database/database";
import { ICredentialReqBody } from "../types/credentialTypes";

export async function gettingCredentialByName(name:string,userId:number){
    const credential = await prisma.credentials.findFirst({
        where:{
            name,
            userId
        }
    });
    return credential;
}

export async function storing({name,url,userName,password,userId}:ICredentialReqBody){
    await prisma.credentials.create({
        data: {
            name,
            url,
            userName,
            password,
            userId
        }
    });
}