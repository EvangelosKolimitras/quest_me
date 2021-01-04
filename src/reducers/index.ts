import { AuthedUserReducer } from './authedUser';
import { QuestionsReducer } from './questions';
import { UsersReducer } from './users'

// Reducers API
const API = {
	users: UsersReducer,
	questions: QuestionsReducer,
	authedUser: AuthedUserReducer
}


// A custome hook for creating reducers
export const reducerAPI = () => (fn: Function) => fn(API);
