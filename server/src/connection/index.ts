import { MongoClient } from "mongodb"
import dotenv from "dotenv"

dotenv.config()

const client:MongoClient = new MongoClient(`mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB_DOMAIN}/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,{useUnifiedTopology:true})
export const connect = async () => {
    try {
        client.connect(e=>{
			let users = client.db("usersdb").collection("users")
			console.log("Connected successfully to server");
		})
    }catch (e){
        console.log(e);
    }
}