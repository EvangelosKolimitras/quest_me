import React from "react";
import { Switch, Route } from 'react-router-dom'
import { Dashboard } from "./components/Dashboard";
import { NavigationBar } from "./components/NavigationBar";
import { Questions } from "./components/Questions";

export const App: React.FC = React.memo(() => {
	return (
		<div>
			<NavigationBar />
			<Switch>
				<Route exact path="/" component={Dashboard} />
				<Route path="/questions" component={Questions} />
			</Switch>
		</div>
	)
})

