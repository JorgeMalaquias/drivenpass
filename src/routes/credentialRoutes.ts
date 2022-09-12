import { Router } from "express";
import { creatingCredential, deleteCredential, gettingAll, gettingOneCredential } from "../controllers/credentialControllers";
import { validateSchemaMiddleware } from "../middlewares/validateSchema";
import { validatingToken } from "../middlewares/validateToken";
import { validatingUser } from "../middlewares/validatingUser";
import { credentialSchema } from "../schemas/credentialSchema";

const credentialRoutes = Router();

credentialRoutes.post('/credentials',validatingToken,validatingUser,validateSchemaMiddleware(credentialSchema),creatingCredential);
credentialRoutes.get('/credentials',validatingToken,gettingAll);
credentialRoutes.get('/credentials/:id',validatingToken,gettingOneCredential);
credentialRoutes.delete('/credentials/:id',validatingToken,deleteCredential);

export default credentialRoutes;