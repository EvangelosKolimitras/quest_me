import { RECEIVE_QUESTIONS, ADD_QUESTION, ADD_ANSWER } from './../../actions/questions/actions';
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

		case ADD_ANSWER:
			return {
				...state,
				[action.answer.qid]: {
					...state[action.answer.qid],
					[action.answer.answer]: {
						...state[action.answer.qid][action.answer.answer],
						votes: state[action.answer.qid][action.answer.answer].votes.concat([action.answer.authedUser])
					}
				}
			}

		default:
			return state
	}
}