import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Switch, Route } from 'react-router-dom'
import { Dashboard } from "./components/Dashboard";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { NavigationBar } from "./components/NavigationBar";
import { NewQuestion } from "./components/NewQuestion";
import { Questions } from "./components/Questions";

interface DefaultRootState { authedUser: string }

export const App: React.FC = React.memo(() => {
	const authedUser = useSelector((state: DefaultRootState) => state.authedUser)
	const [isAuthed, setIsAuthed] = useState(!authedUser)
	return (
		<>
			{ifAuthedRenderNav(isAuthed)}
			<Switch>
				{ifAuthedRenderHome(isAuthed)}
				{ifAuthedRenderQuestions(isAuthed)}
				{ifAuthedRendeLeaders(isAuthed)}
				{ifAuthedRenderNewQuestion(isAuthed)}
				{ifNotAuthed(isAuthed)}
			</Switch>
		</>
	)
})

const ifAuthedRenderNav = (authed: any) => authed && <NavigationBar />
const ifAuthedRenderHome = (authed: any) => authed && <Route exact path="/" component={Home} />
const ifAuthedRenderQuestions = (authed: any) => authed && <Route path="/questions" component={Questions} />
const ifAuthedRendeLeaders = (authed: any) => authed && <Route path="/leaderboard" component={Dashboard} />
const ifAuthedRenderNewQuestion = (authed: any) => authed && <Route path="/new" component={NewQuestion} />
const ifNotAuthed = (authed: any) => !authed && <Route redirect="/login" component={Login} />