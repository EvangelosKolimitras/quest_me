import { Container } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { IUsers } from '../../services/declarations'
import { DashboardItem } from '../DashboardItem'
import { useStyles } from './styles'

interface DefaultRootState { users: IUsers }

const sortUsers = (users: IUsers) => Object.keys(users).sort((a, b) => sort(users)(a, b))
const calculate = (users: IUsers) => (x: string) => Object.keys(users[x].answers).length + users[x].questions.length
const sort = (users: IUsers) => (a: string, b: string) => calculate(users)(b) - calculate(users)(a)

export const Dashboard = () => {
	const classes = useStyles();
	const users = sortUsers(useSelector((state: DefaultRootState) => state.users))

	return (
		<Container className={classes.root} maxWidth="md">
			<h1>Leaderboard</h1>
			{users.map(uid => <DashboardItem key={uid} id={uid} />)}
		</Container>
	)
}