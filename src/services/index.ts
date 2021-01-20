import axios from 'axios';
import { INewQuestion, InitializationsReturnType } from './declarations';

export const initializations = async (uri: string = "http://localhost:9999"): Promise<InitializationsReturnType> => {

	const getUsers = async () => await axios.get(`${uri}/users`)
	const getQuestions = async () => await axios.get(`${uri}/questions`)

	let { data: users } = await getUsers();
	let { data: questions } = await getQuestions();

	const generateUID = async (): Promise<string> =>
		Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)

	const formatQuestion = async ({ optionOneText, optionTwoText, author }: INewQuestion) => ({
		id: await generateUID(),
		timestamp: Date.now(),
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