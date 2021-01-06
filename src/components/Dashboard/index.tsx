import { Container } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { IUsers } from '../../services/declarations'
import { DashboardItem } from '../DashboardItem'

interface DefaultRootState { users: IUsers }
export function Dashboard() {
	return render(sortUsers(useSelector((state: DefaultRootState) => state.users)))
}

function render(users: any[]) {
	return (
		<Container maxWidth="md">
			<h1>Leaderboard</h1>
			{users.map(uid => <DashboardItem key={uid} id={uid} />)}
		</Container>
	)
}

function sortUsers(users: IUsers) {
	return Object
		.keys(users)
		.sort((a, b) => sort(users)(a, b)
		)
}

function calculate(users: IUsers) {
	return (x: string) => Object.keys(users[x].answers).length + users[x].questions.length
}

function sort(users: IUsers) {
	return (a: string, b: string) => calculate(users)(b) - calculate(users)(a)
}
