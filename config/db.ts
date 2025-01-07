import { MongoClient, ServerApiVersion } from 'mongodb';
import Logger from './logger';

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.m2ghz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});


async function connect() {
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        Logger.info("DB connected");
    } catch (e) {
        Logger.error("It's not possible to connect", e);
        process.exit(1);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

export default connect;
