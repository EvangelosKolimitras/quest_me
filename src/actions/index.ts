import { initializations, saveQuestion, saveQuestionAnswer } from '../services';
import { addQuestion, receiveQuestions } from './questions';
import { addUserAnswer, addUserQuestions, receiveUsers } from './users';

export { usersAction } from './users';
export { questionsAction } from './questions';
export { authedUserAction } from './authedUser';

export const initiliazer = () =>
	(dispatch: any) =>
		initializations()
			.then(({ users, questions }: any) => {
				dispatch(receiveUsers(users))
				dispatch(receiveQuestions(questions))
			})

export const addQuestionHandler = (optionOne: string, optionTwo: string, author: string) =>
	async (dispatch: any) => {
		const question: any = await saveQuestion({ optionOne, optionTwo, author })
		dispatch(addQuestion(question))
		dispatch(addUserQuestions(question))
	}

export function addAnswerHandler(authedUser: any, qid: any, answer?: any) {
	return (dispatch: (arg0: any) => void, getState: any) => {
		saveQuestionAnswer({
			authedUser,
			qid,
			answer
		}).then(() => {
			dispatch(addUserQuestions({ authedUser, qid, answer }))
			dispatch(addUserAnswer({ authedUser, qid, answer }))
		})
	}
}
