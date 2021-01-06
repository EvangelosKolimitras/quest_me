import { applyMiddleware } from "redux";
import { Thunk } from './thunk'

export const middleware = () => applyMiddleware(
	Thunk().thunk
)