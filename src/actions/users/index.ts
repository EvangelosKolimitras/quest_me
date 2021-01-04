import * as Actions from './actions';
import { createActionCreator } from './actionCreators';
import { IQuestions, IUsers } from '../../services/declarations';

const AC = createActionCreator();

type users = IUsers;
type questions = IQuestions;
export const receiveUsers = (users: users) => AC({ type: Actions.RECEIVE_USERS, payload: users })
export const addUserQuestions = (questions: questions) => AC({ type: Actions.ADD_USER_QUESTIONS, payload: questions })

type API_TYPE = {
	receiveUsers: Function
	addUserQuestions: Function
}

const API: API_TYPE = { receiveUsers, addUserQuestions };

// A custome hook for creating user actions
export const usersAction = () => API