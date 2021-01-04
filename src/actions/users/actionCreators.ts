import { IQuestion, IUsers } from '../../services/declarations'
import { actionType } from './actions'

type payload = IUsers | IQuestion
interface Props {
	type: actionType,
	payload: payload
}

// Custom hook for creating action creators
export const createActionCreator = () => (props: Props) => props
