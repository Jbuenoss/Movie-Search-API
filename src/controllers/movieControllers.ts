import { Request, Response } from "express";

// Model
import { MovieModel } from "../models/movie";

// Logger
import Logger from "../../config/logger";


export async function createMovie(req: Request, res: Response):Promise<any> {
    try {
        const data = req.body;
        const movie = await MovieModel.create(data);
        return res.status(201).json(movie);
    } catch (e: any) {
        Logger.info(`Erro no sistema: ${e}`);
        res.status(500).json({ message: "Failed to create movie" });
    }
}

export async function findMovieById(req: Request, res: Response):Promise<any> {
    try {
        const id = req.params.id;
        const movie = await MovieModel.findById(id);

        if (!movie) {
            return res.status(404).json({ error: "The movie doesn't exist" });
        }

        return res.status(200).json(movie);
    } catch (e: any) {
        Logger.info(`System error: ${e.message}`);
        return res.status(500).json({ error: "Try again later" });
    }
}

export async function getAllMovies(req: Request, res: Response):Promise<any> {
    try {
        const movies = await MovieModel.find();
        return res.status(200).json(movies);
    } catch (e: any) {
        Logger.info(`System error: ${e.message}`);
        return res.status(500).json({ error: "Try again later" });
    }
}

export async function removeMovie(req: Request, res: Response):Promise<any> {
    try {
        const id = req.params.id;
        const movie = await MovieModel.findByIdAndDelete(id);

        if (!movie) {
            return res.status(404).json({ error: "The movie doesn't exist" });
        }

        return res.status(201).json({ msg: "Movie deleted!" });
    } catch (e: any) {
        Logger.info(`Erro no sistema: ${e.message}`);
        return res.status(500).json({ error: "Failed to remove the movie!" });
    }
}

export async function updateMovie(req: Request, res: Response):Promise<any> {
    try {
        const id = req.params.id;
        const data = req.body
        const movie = await MovieModel.findById(id);

        if (!movie) {
            return res.status(404).json({ error: "The movie doesn't exist" });
        }

        await MovieModel.updateOne({ _id: id }, data);

        return res.status(200).json(data);
    } catch (e: any) {
        Logger.info(`Erro no sistema: ${e.message}`);
        return res.status(500).json({ error: "Try again later" });
    }
};
