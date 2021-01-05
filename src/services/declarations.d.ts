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
	avatarURL: null
	answers: { [key: string]: string }
	questions: string[]
}

export interface IUsers {
	[key: string]: IUser
}

export type IAuthedUser = {
	[key: string]: IUser
}

export type AnswerType = string
