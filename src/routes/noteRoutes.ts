import { Router } from "express";
import { validatingToken } from "../middlewares/validateToken";
import { validatingUser } from "../middlewares/validatingUser";

const noteRoutes = Router();


noteRoutes.post('/notes',validatingToken,validatingUser);
noteRoutes.get('/notes',validatingToken);
noteRoutes.get('/notes/:id',validatingToken);
noteRoutes.delete('/notes/:id',validatingToken);

export default noteRoutes;
