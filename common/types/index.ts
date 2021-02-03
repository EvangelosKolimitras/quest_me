import { IUsers, IQuestions, AuthedUser } from './types';
export type { SortQuestions } from './types.utils'

export interface DefaultRootState {
	authedUser: AuthedUser,
	users: IUsers,
	questions: IQuestions
}

export type AuthedUserPartialRootState = Partial<DefaultRootState>
export type UsersPartialRootState = Partial<DefaultRootState>
export type QuestionsPartialRootState = Partial<DefaultRootState> 