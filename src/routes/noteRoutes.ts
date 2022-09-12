import { Router } from "express";
import { validatingToken } from "../middlewares/validateToken";

const noteRoutes = Router();


noteRoutes.post('/notes',validatingToken);
noteRoutes.get('/notes',validatingToken);
noteRoutes.get('/notes/:id',validatingToken);
noteRoutes.delete('/notes/:id',validatingToken);

export default noteRoutes;
