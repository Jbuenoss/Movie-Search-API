import { model, Schema } from "mongoose";

const movieSchema = new Schema(
  {
    title: { type: String },
    rating: { type: Number },
    description: { type: String },
    director: { type: String },
    stars: { type: Array },
    poster: { type: String },
  },
);

export const MovieModel = model("Movie", movieSchema);