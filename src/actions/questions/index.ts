import * as Actions from './actions';
import { createActionCreator } from './actionCreators';
import { IQuestions } from '../../services/declarations';

const AC = createActionCreator();

type questions = IQuestions;
export const receiveQuestions = (questions: questions) => AC({ type: Actions.RECEIVE_QUESTIONS, payload: questions })

const api = {
	receiveUsers: receiveQuestions,
}

// A custome hook for creating question actions
export const questionsAction = () => () => api