import { MongoClient } from "mongodb"
import dotenv from "dotenv"

dotenv.config()

const {
    MONGODB_CONNECTION_STRING: URI,
    MONGODB_USERS_DATABASE:usersDB,
    MONGODB_USERS_COLLECTION: usersCollection,
    MONGODB_QUESTIONS_DATABASE: questionsDB,
    MONGODB_QUESTIONS_COLLECTION: questionsCollection
} = process.env

const client:MongoClient = new MongoClient(URI as string, { useUnifiedTopology: true });

export const connect = async () => {
    try {
        let users= await (await client.connect()).db(usersDB).collection(usersCollection!).find({}).toArray();
        let questions= await (await client.connect()).db(questionsDB).collection(questionsCollection!).find({}).toArray();
        return {
            users,
            questions
        }
    }catch (e){
        console.log(e);
    }
}