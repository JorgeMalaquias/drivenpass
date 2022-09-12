import { Router } from "express";
import { creatingCredential } from "../controllers/credentialControllers";
import { validateSchemaMiddleware } from "../middlewares/validateSchema";
import { validatingToken } from "../middlewares/validateToken";
import { credentialSchema } from "../schemas/credentialSchema";

const credentialRoutes = Router();

credentialRoutes.post('/credentials',validatingToken,validateSchemaMiddleware(credentialSchema),creatingCredential);
credentialRoutes.get('/credentials',validatingToken);
credentialRoutes.get('/credentials/:id',validatingToken);
credentialRoutes.delete('/credentials/:id',validatingToken);

export default credentialRoutes;