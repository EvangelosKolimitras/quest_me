import { IUsers, IQuestions, AnswerType } from '../../services/declarations'
import { actionType } from './actions'

type payload = IUsers | IQuestions | AnswerType
export interface UsersProps {
	type: actionType,
	payload: payload
}

// Custom hook for creating action creators
export const createActionCreator = () => (props: UsersProps) => props
