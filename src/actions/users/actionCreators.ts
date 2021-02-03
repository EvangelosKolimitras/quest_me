import { IUsers, IQuestions, Answer } from '../../../common/types/types'
import { actionType } from './actions'

type payload = IUsers | IQuestions | Answer
export interface UsersProps {
	type: actionType,
	payload: payload
}

// Custom hook for creating action creators
export const createActionCreator = () => (props: UsersProps) => props
