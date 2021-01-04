import { IUsers, IQuestions } from '../../services/declarations'
import { actionType } from './actions'

type payload = IUsers | IQuestions
export interface UsersProps {
	type: actionType,
	payload: payload
}

// Custom hook for creating action creators
export const createActionCreator = () => (props: UsersProps) => props
