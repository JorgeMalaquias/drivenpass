import { Router } from "express";
import { validatingToken } from "../middlewares/validateToken";

const cardRoutes = Router();

cardRoutes.post('/cards',validatingToken);
cardRoutes.get('/cards',validatingToken);
cardRoutes.get('/cards/:id',validatingToken);
cardRoutes.delete('/cards/:id',validatingToken);

export default cardRoutes;





