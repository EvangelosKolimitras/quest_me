import { IAuthedUser } from '../../../common/types'
import { actionTypes } from './actions'

export interface AuthedUserProps {
	type: actionTypes,
	payload?: IAuthedUser
}

// Custom hook for creating action creators
export const createActionCreator = () => (props: AuthedUserProps) => props
