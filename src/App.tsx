import { useSelector } from "react-redux"
import { IUsers } from "./services/declarations";
import { Switch, Route } from 'react-router-dom'
import { Dashboard } from "./components/Dashboard";
import { NavigationBar } from "./components/NavigationBar";
import { Questions } from "./components/Questions";

interface DefaultRootState {
	users: IUsers
}

export const App: React.FC = () => {
	const users = useSelector((state: DefaultRootState) => state)

	return (
		<div>
			<h1>Quest me</h1>
			<Switch>
				<Route exact path="/" component={Dashboard} />
				<Route path="/questions" component={Questions} />
			</Switch>
		</div>
	)
}

