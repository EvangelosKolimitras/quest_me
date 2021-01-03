import { RECEIVE_USERS } from './../../actions/users/actions';

const initialState = {};
export const UsersReducer = (state: any = initialState, action: any) => {
	const { type, payload } = action;
	switch (type) {
		case RECEIVE_USERS:
			return {
				...state,
				...payload
			}
		default:
			return state
	}
}