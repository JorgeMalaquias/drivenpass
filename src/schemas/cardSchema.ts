import joi from "joi";
import { ICardBody } from "../types/cardTypes";

export const cardSchema = joi.object<ICardBody>({
    title: joi.string().required(),
    number: joi.string().length(16).required(),
    name: joi.string().required(),
    securityCode: joi.string().length(3).required(),
    expirationDate: joi.string().required(),
    password: joi.string().length(4).required(),
    isVirtual: joi.boolean().required(),
    type: joi.string().required(),
    userId: joi.number().required()
});