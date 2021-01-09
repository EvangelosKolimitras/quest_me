import { Container } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { IUsers } from '../../services/declarations'
import { DashboardItem } from '../DashboardItem'

interface DefaultRootState { users: IUsers }

const jsx = (users: any[]) =>
	<Container maxWidth="md">
		<h1>Leaderboard</h1>
		{users.map(uid => <DashboardItem key={uid} id={uid} />)}
	</Container>

const sortUsers = (users: IUsers) => Object.keys(users).sort((a, b) => sort(users)(a, b))

const calculate = (users: IUsers) => (x: string) => Object.keys(users[x].answers).length + users[x].questions.length

const sort = (users: IUsers) => (a: string, b: string) => calculate(users)(b) - calculate(users)(a)

export const Dashboard = () => jsx(sortUsers(useSelector((state: DefaultRootState) => state.users)))