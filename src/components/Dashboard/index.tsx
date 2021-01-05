import { Container } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { IUsers } from '../../services/declarations'

interface DefaultRootState { users: IUsers }
export function Dashboard() {
	return render(sortUsers(useSelector((state: DefaultRootState) => state.users)))
}

function render(users: any[]) {
	return (
		<Container maxWidth="md">
			<h1>Dashboard</h1>
			{users.map(uid => <p key={uid}>{uid}</p>)}
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
