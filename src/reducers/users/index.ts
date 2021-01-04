import { ADD_USER_QUESTION, RECEIVE_USERS } from './../../actions/users/actions';

const initialState = {};
export const UsersReducer = (state: any = initialState, action: any) => {
	const { type, payload } = action;
	switch (type) {

		case RECEIVE_USERS:
			return {
				...state,
				...payload
			}

		case ADD_USER_QUESTION:
			return {
				...state,
				[payload.author]: {
					...state[payload.author.author],
					questions: state[payload.author.author].questions.concat([payload.author.id])
				}
			}

		default:
			return state

	}
}