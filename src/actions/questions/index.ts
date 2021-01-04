import * as Actions from './actions';
import { createActionCreator } from './actionCreators';
import { IQuestion, IQuestions } from '../../services/declarations';

const AC = createActionCreator();

type questions = IQuestions;
export const receiveQuestions = (questions: questions) => AC({ type: Actions.RECEIVE_QUESTIONS, payload: questions })

type question = IQuestion;
export const addQuestion = (question: question) => AC({ type: Actions.ADD_QUESTION, payload: question })

interface QuestionsAPI {
	receiveQuestions?: Function
	addQuestion?: Function
}

const API: QuestionsAPI = {};

API.receiveQuestions = receiveQuestions
API.addQuestion = addQuestion

// A custome hook for creating question actions
export const questionsAction = () => () => API