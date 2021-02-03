import { IQuestions, IQuestion, Answer, AddedAnswer } from '../../../common/types/types'
import { actionTypes } from './actions'

export interface QuestionsActionProps {
	[x: string]: any
	type: actionTypes,
	payload: IQuestions | IQuestion | Answer | AddedAnswer | any
}

// Custom hook for creating action creators
export const createActionCreator = () => (props: QuestionsActionProps) => props
