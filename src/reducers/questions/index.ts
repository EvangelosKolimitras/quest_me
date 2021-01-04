import { RECEIVE_QUESTIONS, ADD_QUESTION } from './../../actions/questions/actions';
import { QuestionsActionProps } from '../../actions/questions/actionCreators';

const initialState = {};
export const QuestionsReducer = (state: any = initialState, action: QuestionsActionProps) => {
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
				[payload.id as string]: payload
			}

		default:
			return state
	}
}