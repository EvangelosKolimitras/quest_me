import { UsersProps } from '../../actions/users/actionCreators';
import { ADD_USER_ANSWER, ADD_USER_QUESTIONS, RECEIVE_USERS } from './../../actions/users/actions';

const initialState: any = {};
export const UsersReducer = (state: any = initialState, action: UsersProps) => {
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
				[payload.author as string]: {
					...state[payload.author as string],
					questions: state[payload.author as string].questions.concat([payload.id as string])
				}
			}

		case ADD_USER_ANSWER:
			return {
				...state,
				[payload.authedUser as string]: {
					...state[payload.authedUser as string],
					answers: {
						...state[payload.authedUser as string].answers,
						[payload.qid as string]: payload.answer as string
					}
				}
			}

		default:
			return state
	}

}