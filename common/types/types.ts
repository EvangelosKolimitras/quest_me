export type String = string

export type ID = String;
export type Author = String
export type Timestamp = Date
export type Votes<O> = Array<O>
export type Name = String
export type Url = String
export type AuthedUser = String

export type PercentageCalculator = (isNaN: boolean) => (specific: number, total: number) => number

interface Option<O> {
	votes: Votes<O>
	text: O
}

export interface IQuestions { [key: string]: IQuestion }
export type Questions = IQuestion[]
export interface IQuestion {
	id: ID
	author: Author
	timestamp: Timestamp
	optionOne: Option<String>
	optionTwo: Option<String>
}

export interface IUsers { [key: string]: IUser }
export interface IUser {
	id: ID
	name: Name
	avatarURL: Url
	answers: Answer
	questions: String[]
}

export type IAuthedUser = {
	[key: string]: IUser
}

export type Answer = { [key: string]: String }
export interface AddedAnswer {
	[key: string]: {
		authedUser: AuthedUser,
		qid: String,
		answer: String
	}
}