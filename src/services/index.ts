
// Services API
import { users } from './users'
import { questions } from './questions'

export const _getUsers = () =>
	new Promise((res, rej) => setTimeout(() => res({ ...users }), 1000))

export const _getQuestions = () =>
	new Promise((res, rej) => setTimeout(() => res({ ...questions }), 1000))

const generateUID = (): string =>
	Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)

const formatQuestion = ({ optionOne, optionTwo, author }: any) => ({
	id: generateUID(),
	timestamp: Date.now(),
	author,
	optionOne: {
		votes: [],
		text: optionOne,
	},
	optionTwo: {
		votes: [],
		text: optionTwo,
	}
})

const _saveQuestion = (question: any) =>
	new Promise((res, rej) => {
		const authedUser = question.author;
		const formattedQuestion = formatQuestion(question)
		let q = questions;
		let u = users;
		setTimeout(() => {
			q = {
				...q,
				[formattedQuestion.id]: formattedQuestion
			}
			u = {
				...users,
				[authedUser]: {
					...u[authedUser],
					questions: u[authedUser].questions.concat([formattedQuestion.id])
				}
			}
			res(formattedQuestion)
		}, 1000)
	})

export const saveQuestion = (question: any) => _saveQuestion(question)
export { users, questions }