import { RECEIVE_QUESTIONS } from './../../actions/questions/actions';

const initialState = {};
export const QuestionsReducer = (state: any = initialState, action: any) => {
	const { type, payload } = action;
	switch (type) {
		case RECEIVE_QUESTIONS:
			return {
				...state,
				...payload
			}
		default:
			return state
	}
}