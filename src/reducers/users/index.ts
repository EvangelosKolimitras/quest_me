import { ADD_USER_QUESTIONS, RECEIVE_USERS } from './../../actions/users/actions';

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
		default:
			return state
	}

}