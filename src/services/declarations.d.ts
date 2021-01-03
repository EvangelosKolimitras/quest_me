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
