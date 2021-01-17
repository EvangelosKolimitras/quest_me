import { IQuestions, IUsers } from './../services/declarations.d';
import { initializations, saveQuestion, saveQuestionAnswer } from '../services';
import { addAnswer, addQuestion, receiveQuestions } from './questions';
import { addUserAnswer, addUserQuestions, receiveUsers } from './users';
import { showLoading, hideLoading } from 'react-redux-loading'

export { usersAction } from './users';
export { questionsAction } from './questions';
export { authedUserAction } from './authedUser';

export const initiliazer = () =>
	async (dispatch: any) => {
		dispatch(showLoading())
		const { users, questions } = await initializations();
		dispatch(receiveUsers(users as IUsers));
		dispatch(receiveQuestions(questions as IQuestions));
		dispatch(hideLoading());
	}

export const addQuestionHandler = (optionOne: string, optionTwo: string, author: string) =>
	async (dispatch: any) => {
		dispatch(showLoading())
		const question: any = await saveQuestion({ optionOne, optionTwo, author })
		dispatch(addQuestion(question))
		dispatch(addUserQuestions(question))
		dispatch(hideLoading())
	}

export function addAnswerHandler(authedUser: any, qid: any, answer?: any) {
	return async (dispatch: (arg0: any) => void) => {
		dispatch(showLoading())
		await saveQuestionAnswer({
			authedUser,
			qid,
			answer
		});
		dispatch(addAnswer({ authedUser, qid, answer }));
		dispatch(addUserAnswer({ authedUser, qid, answer }));
		dispatch(hideLoading());
	}
}
