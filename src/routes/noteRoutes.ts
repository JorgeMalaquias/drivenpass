import { Router } from "express";
import { creatingNote, gettingOneNote,gettingAll,deleteNote } from "../controllers/noteControllers";
import { validateSchemaMiddleware } from "../middlewares/validateSchema";
import { validatingToken } from "../middlewares/validateToken";
import { validatingUser } from "../middlewares/validatingUser";
import { noteSchema } from "../schemas/noteSchema";

const noteRoutes = Router();


noteRoutes.post('/notes',validatingToken,validatingUser,validateSchemaMiddleware(noteSchema),creatingNote);
noteRoutes.get('/notes',validatingToken,gettingAll);
noteRoutes.get('/notes/:id',validatingToken,gettingOneNote);
noteRoutes.delete('/notes/:id',validatingToken,deleteNote);

export default noteRoutes;
