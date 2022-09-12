import { Router } from "express";
import { logging, registering } from "../controllers/userControllers";
import comparingPasswords from "../middlewares/comparingPassword";
import { validateSchemaMiddleware } from "../middlewares/validateSchema";
import { userLoginSchema, userRegisterSchema} from "../schemas/userSchemas";

const userRoutes = Router();

userRoutes.post('/register',comparingPasswords, validateSchemaMiddleware(userRegisterSchema),registering);
userRoutes.post('/login',validateSchemaMiddleware(userLoginSchema),logging);

export default userRoutes;