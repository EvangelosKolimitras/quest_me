import { IUsers } from '../../services/declarations'
import { actionTypes } from './actions'

interface Props {
	type: actionTypes,
	payload: IUsers
}

// Custom hook for creating action creators
export const createActionCreator = () => (props: Props) => props
