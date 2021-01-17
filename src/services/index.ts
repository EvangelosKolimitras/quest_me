
// Services API
import { users } from './users'
import { questions } from './questions'

let Q = questions;
let U = users;

export const initializations = () =>
	Promise.all([
		_getUsers(),
		_getQuestions(),
	]).then(([users, questions]) => ({
		users,
		questions,
	}))

const _getUsers = () =>
	new Promise((res, rej) => setTimeout(() => res({ ...users }), 500))

const _getQuestions = () =>
	new Promise((res, rej) => setTimeout(() => res({ ...questions }), 500))

const generateUID = (): string =>
	Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)

const formatQuestion = ({ optionOneText, optionTwoText, author }: any) => ({
	id: generateUID(),
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

export const saveQuestion = (question: any) => _saveQuestion(question)
const _saveQuestion = (question: any) =>
	new Promise((res, rej) => {
		const authedUser = question.author;
		const formattedQuestion = formatQuestion(question)
		setTimeout(() => {
			Q = {
				...Q,
				[formattedQuestion.id]: formattedQuestion
			}
			U = {
				...U,
				[authedUser]: {
					...U[authedUser],
					questions: U[authedUser].questions.concat([formattedQuestion.id])
				}
			}
			res(formattedQuestion)
		}, 1000)
	})

export const saveQuestionAnswer = (info: any) =>
	_saveQuestionAnswer(info)

function _saveQuestionAnswer({ authedUser, qid, answer }: any) {
	return new Promise<void>((res, rej) => {
		setTimeout(() => {
			U = {
				...U,
				[authedUser]: {
					...U[authedUser],
					answers: {
						...U[authedUser].answers,
						[qid]: answer
					}
				}
			}

			Q = {
				...Q,
				[qid]: {
					...Q[qid],
					[answer]: {
						...Q[qid][answer],
						votes: Q[qid][answer].votes.concat([authedUser])
					}
				}
			}
			res()
		}, 500)
	})
}

export { users, questions }