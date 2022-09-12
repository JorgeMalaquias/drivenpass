import joi from "joi";
import { IWifiBody } from "../types/wifiTypes";

//creating
export const wifiSchema = joi.object<IWifiBody>({
    title: joi.string().required(),
    name: joi.string().required(),
    password: joi.string().required(),
    userId: joi.number().required()
});