import { applyMiddleware } from "redux";
import { Logger } from "./logger";
import { Thunk } from './thunk'

export const middleware = () => applyMiddleware(
	Logger().logger,
	Thunk().thunk
)