import { Router } from "express";
import { creatingWifi,gettingOneWifi,gettingAll, deleteWifi } from "../controllers/wifiControllers";
import { validateSchemaMiddleware } from "../middlewares/validateSchema";
import { validatingToken } from "../middlewares/validateToken";
import { validatingUser } from "../middlewares/validatingUser";
import { wifiSchema } from "../schemas/wifiSchema";

const wifiRoutes = Router();


wifiRoutes.post('/wifis',validatingToken,validatingUser,validateSchemaMiddleware(wifiSchema),creatingWifi);
wifiRoutes.get('/wifis',validatingToken,gettingAll);
wifiRoutes.get('/wifis/:id',validatingToken,gettingOneWifi);
wifiRoutes.delete('/wifis/:id',validatingToken,deleteWifi);

export default wifiRoutes;