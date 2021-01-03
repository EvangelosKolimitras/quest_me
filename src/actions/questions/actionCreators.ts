import { IQuestions } from '../../services/declarations'
import { actionTypes } from './actions'

interface Props {
	type: actionTypes,
	payload: IQuestions
}

// Custom hook for creating action creators
export const createActionCreator = () => (props: Props) => props
