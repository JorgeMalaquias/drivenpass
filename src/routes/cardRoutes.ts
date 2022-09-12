import { Router } from "express";
import { validatingToken } from "../middlewares/validateToken";
import { validatingUser } from "../middlewares/validatingUser";

const cardRoutes = Router();

cardRoutes.post('/cards',validatingToken,validatingUser);
cardRoutes.get('/cards',validatingToken);
cardRoutes.get('/cards/:id',validatingToken);
cardRoutes.delete('/cards/:id',validatingToken);

export default cardRoutes;





