import { applyMiddleware } from "redux";
import { log } from "./logger";

export const middleware = () => applyMiddleware(
	log().logger
)