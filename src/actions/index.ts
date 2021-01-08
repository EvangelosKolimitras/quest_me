import { Dispatch } from 'redux';
import { saveQuestion } from '../services';
import { addQuestion } from './questions';
import { addUserQuestions } from './users';

export { usersAction } from './users';
export { questionsAction } from './questions';
export { authedUserAction } from './authedUser';

export function addQuestionHandler(optionOne: string, optionTwo: string, author: string) {
	return (dispatch: Dispatch) => {
		saveQuestion({
			optionOne,
			optionTwo,
			author
		})
			.then((question: any) => {
				dispatch(addQuestion(question))
				dispatch(addUserQuestions(question))
			})
	}
}
