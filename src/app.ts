// ENV variables
require("dotenv").config();

import express from "express";
import config from "config";

const app = express();
const port = config.get<number>("port");

// middlewares
app.use(express.json());

// DB
import db from "../config/db";

// routes
import router from "./router";

// Logger
import Logger from "../config/logger";


app.use("/api/", router);



app.listen(port, async () => {
    await db();
    Logger.info(`HTTP server running on port ${port}`);
});