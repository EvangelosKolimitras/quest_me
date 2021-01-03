import { QuestionsReducer } from './questions';
import { UsersReducer } from './users'

// Reducers API
const api = {
	users: UsersReducer,
	questions: QuestionsReducer
}

// A custome hook for creating reducers
export const reducerAPI = () => (fn: Function) => fn(api);
