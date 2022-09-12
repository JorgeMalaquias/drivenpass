import { Router } from "express";
import { validatingToken } from "../middlewares/validateToken";

const credentialRoutes = Router();

credentialRoutes.post('/credentials',validatingToken);
credentialRoutes.get('/credentials',validatingToken);
credentialRoutes.get('/credentials/:id',validatingToken);
credentialRoutes.delete('/credentials/:id',validatingToken);

export default credentialRoutes;