import { useSelector } from "react-redux"
import { IUsers } from "./services/declarations";
import { Switch, Route } from 'react-router-dom'
import { Dashboard } from "./components/Dashboard";
import { NavigationBar } from "./components/NavigationBar";

interface DefaultRootState {
	users: IUsers
}

export const App: React.FC = () => {
	const users = useSelector((state: DefaultRootState) => state)

	return (
		<div>
			<NavigationBar />
			<Switch>
				<Route exact path="/" component={Dashboard} />
			</Switch>
		</div>
	)
}

