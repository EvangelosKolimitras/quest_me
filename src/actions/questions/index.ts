import * as Actions from './actions';
import { createActionCreator } from './actionCreators';
import { IQuestion, IQuestions } from '../../services/declarations';

const AC = createActionCreator();

type questions = IQuestions;
export const receiveQuestions = (questions: questions) => AC({ type: Actions.RECEIVE_QUESTIONS, payload: questions })

type question = IQuestion;
export const addQuestion = (question: question) => AC({ type: Actions.ADD_QUESTION, payload: question })

type answer = any
export const addAnswer = (answer: answer) => AC({ type: Actions.ADD_ANSWER, payload: answer })

interface QuestionsAPI {
	receiveQuestions: Function
	addQuestion: Function
	addAnswer: Function
}

const API: QuestionsAPI = { receiveQuestions, addQuestion, addAnswer };

// A custome hook for creating question actions
export const questionsAction = () => API
