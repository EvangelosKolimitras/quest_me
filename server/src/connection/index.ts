import { MongoClient } from "mongodb"
import dotenv from "dotenv"

dotenv.config()

const {
    MONGO_DB_USERNAME:username,
    MONGO_DB_PASSWORD:password,
    MONGO_DB_DATABASE:database,
    MONGO_DB_DOMAIN:domain,
    MONGO_DB_QUERIES:queries,
    MONGO_DB_COLLECTION:collection
} = process.env

const options = { useUnifiedTopology: true }
const client:MongoClient = new MongoClient(`mongodb+srv://${username}:${password}@${domain}/${database}?${queries}`, options);

export const connect = async () => {
    try {
        return await (await client.connect()).db(database).collection(collection!).find({}).toArray()
    }catch (e){
        console.log(e);
    }
}