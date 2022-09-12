import joi from "joi";
import { ICredentialReqBody } from "../types/credentialTypes";

//creating
export const credentialSchema = joi.object<ICredentialReqBody>({
    name: joi.string().required(),
    url: joi.string().uri().required(),
    userName: joi.string().required(),
    password: joi.string().required(),
    userId: joi.number().required()
});