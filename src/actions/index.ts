import { Dispatch } from 'redux';
import { initializations, saveQuestion } from '../services';
import { addQuestion, receiveQuestions } from './questions';
import { addUserQuestions, receiveUsers } from './users';

export { usersAction } from './users';
export { questionsAction } from './questions';
export { authedUserAction } from './authedUser';

export const initiliazer = () =>
	async (dispatch: Dispatch) => {
		const questions: any = await (await initializations()).questions
		const users: any = await (await initializations()).users
		dispatch(receiveUsers(users));
		dispatch(receiveQuestions(questions));
	}

export const addQuestionHandler = (optionOne: string, optionTwo: string, author: string) =>
	async (dispatch: Dispatch) => {
		const question: any = await saveQuestion({
			optionOne,
			optionTwo,
			author
		})
		dispatch(addQuestion(question))
		dispatch(addUserQuestions(question))
	}
