import { combineReducers, createStore } from 'redux'
import { reducerAPI } from './reducers';
const reducers = reducerAPI()

// A custome hook for creating the store
export const initStore = () => createStore(reducers(combineReducers));