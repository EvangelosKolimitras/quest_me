import { IQuestion, IQuestions } from '../../services/declarations'
import { actionTypes } from './actions'

export interface QuestionsActionProps {
	type: actionTypes,
	payload: IQuestions | IQuestion
}

// Custom hook for creating action creators
export const createActionCreator = () => (props: QuestionsActionProps) => props
