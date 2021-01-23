import { ObjectDestructuringAssignment } from "typescript"

export interface IQuestion {
	id: string
	author: string
	timestamp: number
	optionOne: {
		votes: string[]
		text: string
	}
	optionTwo: {
		votes: string[]
		text: string
	}
}

export interface IQuestions {
	[key: string]: IQuestion
}

export interface IUser {
	id: string
	name: string
	avatarURL: string
	answers: { [key: string]: string }
	questions: string[]
}

export interface IUsers {
	[key: string]: IUser
}

export type IAuthedUser = {
	[key: string]: IUser
}

export interface AnswersType {
	[key: string]: string
}

export export interface AddedAnswer {
	[key: string]: {
		authedUser: IAuthedUser,
		qid: AnswersType,
		answer: AnswersType
	}
}

export interface IAnswer {
	[key: string]: {
		[key: string]: {
			votes: any
		}
	}
}

type InitializationsReturnType = {
	users: IUsers,
	questions: IQuestions,
	saveQuestion: Function,
	saveQuestionAnswer: Function
}

interface INewQuestion {
	optionOneText: string,
	optionTwoText: string,
	author: string
}
