import { UsersReducer } from './users'

// Reducers API
const api = {
	users: UsersReducer
}

// A custome hook for creating reducers
export const reducerAPI = () => (fn: Function) => fn(api);
