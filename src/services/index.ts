import axios from 'axios';
import { INewQuestion, InitializationsReturnType } from './declarations';

export const initializations = async (uri: string = "http://localhost:9999"): Promise<InitializationsReturnType> => {

	let data = await axios.get(`${uri}/api`)

	/* 
		Response normalizer for users data
	*/
	let users:any = {};
	for await(let doc of JSON.parse(data.data).users){
		let user = {
			id: doc._id,
			name: doc.name,
			avatarURL: doc.avatarURL,
			answers: doc.answers,
			questions: doc.questions
		}
		users = {
			...users,
			[user.id] : user
		}
	}

	/*	
		Response normilizer for questions data
	*/
	let questions:any = {};
	for await(let doc of JSON.parse(data.data).questions) {
		let question = {
			id: doc._id,
			author: doc.author,
			optionOne: doc.optionOne,
			optionTwo: doc.optionTwo
		}
		questions = {
			[question.id] : question
		}
	}
		
	const formatQuestion = async ({ optionOneText, optionTwoText, author }: INewQuestion) =>  ({
		id:Math.random(),
		author,
		optionOne: {
			votes: [],
			text: optionOneText,
		},
		optionTwo: {
			votes: [],
			text: optionTwoText, 
		}
	})

	const saveQuestion = async (question: INewQuestion) =>
		await new Promise<{}>(async (res, rej) => {
			const authedUser = question.author;
			const formattedQuestion = await formatQuestion(question)

			questions = {
				...questions,
				[formattedQuestion.id]: formattedQuestion
			}

			users = {
				...users,
				[authedUser]: {
					...users[authedUser],
					questions: users[authedUser].questions.concat([formattedQuestion.id])
				}
			}

			res(formattedQuestion)
		})

	const saveQuestionAnswer = async ({ authedUser, qid, answer }: { authedUser: string, qid: string, answer: string }) => {
		await new Promise<void>((res, rej) => {
			users = {
				...users,
				[authedUser]: {
					...users[authedUser],
					answers: {
						...users[authedUser].answers,
						[qid]: answer
					}
				}
			}

			questions = {
				...questions,
				[qid]: {
					...questions[qid],
					[answer]: {
						...questions[qid][answer],
						votes: questions[qid][answer].votes.concat([authedUser])
					}
				}
			}

			res()
		})
	}

	return {
		users,
		questions,
		saveQuestion,
		saveQuestionAnswer: () => saveQuestionAnswer
	}
}