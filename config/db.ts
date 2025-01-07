import mongoose from "mongoose";
import Logger from './logger';

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.m2ghz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


async function connect() {
    try {
        await mongoose.connect(uri);
        Logger.info("DB connected");
    } catch (e: any) {
        Logger.error("It's not possible to connect");
        process.exit(1);
    }
}

export default connect;
