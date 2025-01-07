import {Router, Request, Response} from "express";
import { createMovie } from "./controllers/movieControllers";
import { validate } from "./middleware/handleValidations"
import { movieCreateValidation } from "./middleware/movieValidation";

const router = Router();

router.get("/test", (req: Request, res: Response) => {
    res.status(200).send("Api working");
}).post("/movie", movieCreateValidation(), validate, createMovie);


export default router;
