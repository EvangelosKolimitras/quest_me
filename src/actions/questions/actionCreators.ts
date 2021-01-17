import { AddedAnswer, AnswersType, IQuestion, IQuestions } from '../../services/declarations'
import { actionTypes } from './actions'

export interface QuestionsActionProps {
	[x: string]: any
	type: actionTypes,
	payload: IQuestions | IQuestion | AnswersType | AddedAnswer | any
}

// Custom hook for creating action creators
export const createActionCreator = () => (props: QuestionsActionProps) => props
