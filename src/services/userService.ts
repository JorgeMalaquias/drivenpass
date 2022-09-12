import { Request, Response } from "express";
import * as userRepository from "../repositories/userRepository"
import Cryptr from "cryptr";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dayjs from "dayjs";
import dotenv from "dotenv";
import { IUser } from "../types/userTypes";
dotenv.config();

export async function registering({ email, password }: IUser) {
    await verifyingUserByEmail(email);
    await userRepository.registering(email, cripting(password));
}

async function verifyingUserByEmail(email: string) {
    const user = await userRepository.gettingUserByEmail(email);
    if (user !== null) {
        console.log(user);
        throw ({ type: 'conflict', message: 'This email is already been used' });
    }
}

function cripting(string: string): string {
    return bcrypt.hashSync(string, 10);
}

export async function logging({ email, password }: IUser) {
    
    const user = await checkingEmail(email);
    checkingPassword(password, user?.password);
    const token = generatingToken(email);
    return token;
}

async function checkingEmail(email:string){
    const user = await userRepository.gettingUserByEmail(email);
    if (user === null) {
        throw ({ type: 'unauthorized', message: 'Invalid credentials' });
    }
    return user;
}
function checkingPassword(password:string, encryptedPassword:string | any){
    if(!bcrypt.compareSync(password,encryptedPassword)){
        throw ({ type: 'unauthorized', message: 'Invalid credentials' });
    };
}

function generatingToken(info:string){
    const jwtKey:string|any = process.env.JWT_SECRET;
    const token = jwt.sign(info,jwtKey);
    if(!token){
        throw ({ type: 'unknown', message: 'Error in generating token' });
    }
    return token;
}