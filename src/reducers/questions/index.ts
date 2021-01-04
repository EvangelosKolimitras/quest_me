import { RECEIVE_QUESTIONS, ADD_QUESTION } from './../../actions/questions/actions';

const initialState = {};
export const QuestionsReducer = (state: any = initialState, action: any) => {
	const { type, payload } = action;
	switch (type) {

		case RECEIVE_QUESTIONS:
			return {
				...state,
				...payload
			}

		case ADD_QUESTION:
			return {
				...state,
				[payload.id]: payload
			}

		default:
			return state
	}
}