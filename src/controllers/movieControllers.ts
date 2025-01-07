import { Request, Response } from "express";

// Model
import { MovieModel } from "../models/movie";

// Logger
import Logger from "../../config/logger";


export async function createMovie(req: Request, res: Response) {
    try {
        const data = req.body;
        const movie = await MovieModel.create(data);
        return res.status(201).json(movie);
      } catch (e: any) {
        Logger.info(`Erro no sistema: ${e}`);
        res.status(500).json({ message: "Failed to create movie"});
      }
}
