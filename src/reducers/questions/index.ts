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

		case ADD_ANSWER: {

			return {
				...state,
				[payload.qid]: {
					...state[payload.qid],
					[payload.answer]: {
						...state[payload.qid][payload.answer],
						votes: state[payload.qid][payload.answer].votes.concat([payload.authedUser])
					}
				}
			}
		}

		default:
			return state
	}
}