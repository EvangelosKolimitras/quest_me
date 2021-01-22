import { MongoClient } from "mongodb"
import dotenv from "dotenv"

dotenv.config()
const {MONGO_DB_USERNAME:username,MONGO_DB_PASSWORD:password,MONGO_DB_DATABASE:database,MONGO_DB_DOMAIN:domain,MONGO_DB_OPTIONS:options} = process.env

const client:MongoClient = new MongoClient(`mongodb+srv://${username}:${password}@${domain}/${database}?${options}`,{useUnifiedTopology:true})
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