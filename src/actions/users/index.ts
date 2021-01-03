
import * as Actions from './actions';
import { createActionCreator } from './actionCreators';
import { IUsers } from '../../services/declarations';

const AC = createActionCreator();

type users = IUsers;
export const receiveUsers = (users: users) => AC({ type: Actions.RECEIVE_USERS, payload: users })

const api = {
	receiveUsers,
}

// A custome hook for creating user actions
export const userAction = () => () => api