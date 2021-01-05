import { ADD_USER_ANSWER, ADD_USER_QUESTIONS, RECEIVE_USERS } from './../../actions/users/actions';

const initialState: any = {};
export const UsersReducer = (state: any = initialState, action: any) => {
	const { type, payload } = action;
	switch (type) {
		case RECEIVE_USERS:
			return {
				...state,
				...payload
			}

		case ADD_USER_QUESTIONS:
			return {
				...state,
				[payload.question.author]: {
					...state[payload.question.author],
					questions: state[payload.question.author].questions.concat([payload.question.id])
				}
			}

		case ADD_USER_ANSWER:
			return {
				...state,
				[payload.answer.authedUser]: {
					...state[payload.answer.authedUser],
					answers: {
						...state[payload.answer.authedUser].answers,
						[payload.answer.qid]: payload.answer.answer
					}
				}
			}
		default:
			return state
	}

}