import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route } from 'react-router-dom'
import { initiliazer } from "./actions";
import { Dashboard } from "./components/Dashboard";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { NavigationBar } from "./components/NavigationBar";
import { NewQuestion } from "./components/NewQuestion";
import { Questions } from "./components/Questions";

interface DefaultRootState {
	questions: any;
	users: any;
	authedUser: string
}

export const App: React.FC = React.memo(() => {
	const dispatch = useDispatch();
	const authedUser = useSelector((state: DefaultRootState) => state.authedUser)
	const users = useSelector((state: DefaultRootState) => state.users)
	const questions = useSelector((state: DefaultRootState) => state.questions)
	const isAuthed = authedUser != null
	const isInitialized = [Object.keys(users), Object.keys(questions)].every((el: any[]) => el.length > 0)

	useEffect(() => {
		dispatch(initiliazer())
	}, [dispatch])
	return jsx(isInitialized, isAuthed)
})

const jsx = (isInitialized: any, isAuthed: any) =>
	<>
		{
			(isAuthed && isInitialized) && <NavigationBar />
		}
		{
			(isAuthed && isInitialized) &&
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/questions" component={Questions} />
				<Route path="/leaderboard" component={Dashboard} />
				<Route path="/new" component={NewQuestion} />
			</Switch>
		}
		{
			(!isAuthed && isInitialized) && <Login />
		}
	</>
