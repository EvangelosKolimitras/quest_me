import { IQuestions, IUsers } from './../services/declarations.d';
import { initializations } from '../services';
import { addAnswer, addQuestion, receiveQuestions } from './questions';
import { addUserAnswer, addUserQuestions, receiveUsers } from './users';
import { showLoading, hideLoading } from 'react-redux-loading'

export { usersAction } from './users';
export { questionsAction } from './questions';
export { authedUserAction } from './authedUser';

export const initiliazer = () =>
	async (dispatch: any): Promise<void> => {
		dispatch(showLoading())
		const { users, questions } = await initializations();
		dispatch(receiveUsers(users as IUsers));
		dispatch(receiveQuestions(questions as IQuestions));
		dispatch(hideLoading());
	}

export const addQuestionHandler = (optionOneText: string, optionTwoText: string, author: string) => async (dispatch: any) => {
	dispatch(showLoading())
	const { saveQuestion } = await initializations();
	const question: any = await saveQuestion({ optionOneText, optionTwoText, author })
	dispatch(addQuestion(await question))
	dispatch(addUserQuestions(await question))
	dispatch(hideLoading())
}

export const addAnswerHandler = (authedUser: any, qid: any, answer: any) =>
	async (dispatch: (arg0: any) => void) => {
		dispatch(showLoading())
		const { saveQuestionAnswer } = await initializations();
		saveQuestionAnswer({ authedUser, qid, answer });
		dispatch(addAnswer({ authedUser, qid, answer }));
		dispatch(addUserAnswer({ authedUser, qid, answer }));
		dispatch(hideLoading());
	}

