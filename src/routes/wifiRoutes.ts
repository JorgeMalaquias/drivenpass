import { Router } from "express";
import { validatingToken } from "../middlewares/validateToken";
import { validatingUser } from "../middlewares/validatingUser";

const wifiRoutes = Router();


wifiRoutes.post('/wifis',validatingToken,validatingUser);
wifiRoutes.get('/wifis',validatingToken);
wifiRoutes.get('/wifis/:id',validatingToken);
wifiRoutes.delete('/wifis/:id',validatingToken);

export default wifiRoutes;