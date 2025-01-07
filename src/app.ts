// ENV variables
require("dotenv").config();

import express from "express";
import config from "config";

const app = express();
const port = config.get<number>("port");

// DB
import db from "../config/db";

// Logger
import Logger from "../config/logger";

// middlewares
import morganMiddleware from "./middleware/morganMiddleware";
app.use(morganMiddleware);
app.use(express.json());

// routes
import router from "./router";
app.use("/api/", router);


app.listen(port, async () => {
    await db();
    Logger.info(`HTTP server running on port ${port}`);
});