import {Router, Request, Response} from "express";

const router = Router();

router.get("/test", (req: Request, res: Response) => {
    res.status(200).send("Api working");
});


export default router;
