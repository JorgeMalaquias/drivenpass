import { prisma } from "../database/database";


export async function gettingUserByEmail(email:string){
    const user = await prisma.users.findUnique({
        where:{
            email
        }
    });
    return user;
}

export async function registering(email:string,password:string){
    await prisma.users.create({
        data: {
            email,
            password
        }
    });
}