import express, { NextFunction, Request, Response } from 'express'

const app = express();
const PORT = process.env.PORT || 9999;
import cors from "cors";
import { connect } from './connection';
import { IMongoData, IMongoQuestionObject, IMongoUserObject } from './model';

async function fetchDataFromDB(): Promise<IMongoData>{
	let data = await connect()

	let users:IMongoUserObject[] = []
	for await(let doc of data?.users as any){
		users.push(doc)
	}

	let questions:IMongoQuestionObject[] = [];
	for await(let doc of data?.questions as any){
		questions.push(doc)
	}

	let datei:IMongoData = {
		users,
		questions
	}

	return datei
}

app.use(cors());

app
	.get("/api", getData)
	.listen(PORT, () =>
		console.log(`Listening on port ${PORT}`)
	)
  
async function getData(req: Request, res: Response, next: NextFunction) {
	const serveData = await fetchDataFromDB();
	res.status(200).json(JSON.stringify(serveData));
}