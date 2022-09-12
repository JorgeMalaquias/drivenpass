import { Users } from "@prisma/client";

export interface IUser {
    email: string,
    password: string
}