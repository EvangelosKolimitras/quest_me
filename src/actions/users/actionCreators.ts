import { IUsers, IQuestions, AnswersType } from '../../../common/types'
import { actionType } from './actions'

type payload = IUsers | IQuestions | AnswersType
export interface UsersProps {
	type: actionType,
	payload: payload
}

// Custom hook for creating action creators
export const createActionCreator = () => (props: UsersProps) => props
