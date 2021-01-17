import { AuthedUserReducer } from './authedUser';
import { QuestionsReducer } from './questions';
import { UsersReducer } from './users'
import { loadingBarReducer } from 'react-redux-loading'

// Reducers API
const API = {
	users: UsersReducer,
	questions: QuestionsReducer,
	authedUser: AuthedUserReducer,
	loadingBar: loadingBarReducer
}

// A custome hook for creating reducers
export const reducerAPI = () => (fn: Function) => fn(API);
