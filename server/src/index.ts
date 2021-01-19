import express, { NextFunction, Request, Response } from 'express'
import { users, questions } from './data';
const app = express();
const PORT = process.env.PORT || 9999;
import cors from "cors"

app.use(cors())
app
	.get("/users", getUsers)
	.get("/questions", getQuestions)
	.listen(PORT, () =>
		console.log(`Listening on port ${PORT}`))

function getUsers(req: Request, res: Response, next: NextFunction) {
	res.status(200).json(users)
}
function getQuestions(req: Request, res: Response, next: NextFunction) {
	res.status(200).json(questions)
}