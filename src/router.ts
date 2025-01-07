import {Router, Request, Response} from "express";
import { createMovie } from "./controllers/movieControllers";

const router = Router();

router.get("/test", (req: Request, res: Response) => {
    res.status(200).send("Api working");
});

router.post("/movie", createMovie);


export default router;
