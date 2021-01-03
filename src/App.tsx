import { useSelector } from "react-redux"
import { IUsers } from "./services/declarations";
import { Switch, Route } from 'react-router-dom'
interface DefaultRootState {
	users: IUsers
}

export const App: React.FC = () => {
	const users = useSelector((state: DefaultRootState) => state)

	return (
		<div>
			<h1>Quest me</h1>
			<Switch>
				<Route exact path="/" render={() => (<h1>Dashboard</h1>)} />
			</Switch>
		</div>
	)
}

