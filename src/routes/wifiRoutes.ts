import { Router } from "express";
import { validatingToken } from "../middlewares/validateToken";

const wifiRoutes = Router();


wifiRoutes.post('/wifis',validatingToken);
wifiRoutes.get('/wifis',validatingToken);
wifiRoutes.get('/wifis/:id',validatingToken);
wifiRoutes.delete('/wifis/:id',validatingToken);

export default wifiRoutes;