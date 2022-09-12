import joi from "joi";
import { INoteBody } from "../types/noteTypes";

//creating
export const noteSchema = joi.object<INoteBody>({
    title: joi.string().max(50).required(),
    text: joi.string().max(1000).required(),
    userId: joi.number().required()
});