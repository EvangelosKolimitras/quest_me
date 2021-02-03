import * as Actions from './actions';
import { createActionCreator } from './actionCreators';
import { IUsers, IQuestions } from '../../../common/types';

const AC = createActionCreator();

type users = IUsers;
export const receiveUsers = (users: users) => AC({ type: Actions.RECEIVE_USERS, payload: users })

type questions = IQuestions;
export const addUserQuestions = (questions: questions) => AC({ type: Actions.ADD_USER_QUESTIONS, payload: questions })

type answer = any;
export const addUserAnswer = (answer: answer) => AC({ type: Actions.ADD_USER_ANSWER, payload: answer })

type API_TYPE = {
	receiveUsers: Function
	addUserQuestions: Function,
	addUserAnswer: Function
}

const API: API_TYPE = { receiveUsers, addUserQuestions, addUserAnswer };

// A custome hook for creating user actions
export const usersAction = () => API