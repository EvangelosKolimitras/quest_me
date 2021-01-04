import { IQuestion, IQuestions } from '../../services/declarations'
import { actionTypes } from './actions'

interface Props {
	type: actionTypes,
	payload: IQuestions | IQuestion
}

// Custom hook for creating action creators
export const createActionCreator = () => (props: Props) => props
