import { Router } from "express";
import { creatingCard, deleteCard, gettingAll, gettingOneCard } from "../controllers/cardController";
import { validateSchemaMiddleware } from "../middlewares/validateSchema";
import { validatingToken } from "../middlewares/validateToken";
import { validatingUser } from "../middlewares/validatingUser";
import { cardSchema } from "../schemas/cardSchema";

const cardRoutes = Router();

cardRoutes.post('/cards',validatingToken,validatingUser,validateSchemaMiddleware(cardSchema),creatingCard);
cardRoutes.get('/cards',validatingToken,gettingOneCard);
cardRoutes.get('/cards/:id',validatingToken,gettingAll);
cardRoutes.delete('/cards/:id',validatingToken,deleteCard);

export default cardRoutes;





