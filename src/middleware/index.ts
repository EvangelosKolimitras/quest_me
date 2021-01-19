import { applyMiddleware } from "redux";
import { Logger } from "./logger";
import { Thunk } from './thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

export const middleware = () => composeWithDevTools(applyMiddleware(
	Logger().logger,
	Thunk().thunk,
))