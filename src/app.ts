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

app.use("/api/", router);



app.listen(port, async () => {
    await db();
    console.log(`HTTP server running on port ${port}`);
});