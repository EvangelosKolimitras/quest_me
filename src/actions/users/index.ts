
import * as Actions from './actions';
import { createActionCreator } from './actionCreators';
import { IQuestion, IUsers } from '../../services/declarations';

const AC = createActionCreator();

type users = IUsers;
type question = IQuestion;
export const receiveUsers = (users: users) => AC({ type: Actions.RECEIVE_USERS, payload: users })
export const addUserQuestion = (question: question) => AC({ type: Actions.ADD_USER_QUESTION, payload: question })

const api = {
	receiveUsers,
	addUserQuestion
}

// A custome hook for creating user actions
export const usersAction = () => api