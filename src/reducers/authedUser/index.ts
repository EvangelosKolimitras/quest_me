import { AuthedUserProps } from '../../actions/authedUser/actionCreators';
import { SET_AUTHED_USER } from '../../actions/authedUser/actions';

const initialState = null;
export const AuthedUserReducer = (state = initialState, action: AuthedUserProps) => {
	const { type, payload } = action;
	switch (type) {
		case SET_AUTHED_USER:
			return payload.id
		default:
			return state
	}
}
