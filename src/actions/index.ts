import { initializations, saveQuestion, saveQuestionAnswer } from '../services';
import { addAnswer, addQuestion, receiveQuestions } from './questions';
import { addUserAnswer, addUserQuestions, receiveUsers } from './users';
import { showLoading, hideLoading } from 'react-redux-loading'
import { IUsers, IQuestions } from '../../common/types/types';

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

export const addQuestionHandler = (optionOneText: string, optionTwoText: string, author: string) => async (dispatch: any) => {
	dispatch(showLoading())
	const question: any = await saveQuestion({ optionOneText, optionTwoText, author })
	dispatch(addQuestion(await question))
	dispatch(addUserQuestions(await question))
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
