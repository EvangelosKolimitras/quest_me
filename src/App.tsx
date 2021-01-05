import React from "react";
import { Switch, Route } from 'react-router-dom'
import { Dashboard } from "./components/Dashboard";
import { NavigationBar } from "./components/NavigationBar";

export const App: React.FC = React.memo(() => {
	return (
		<div>
			<NavigationBar />
			<Switch>
				<Route exact path="/" component={Dashboard} />
			</Switch>
		</div>
	)
})

