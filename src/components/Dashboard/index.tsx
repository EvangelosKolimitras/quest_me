import { Container } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { IUsers } from '../../services/declarations'
import { DashboardItem } from '../DashboardItem'

export const Dashboard: React.FC = () => {
	return (
		<Container maxWidth="md">
			<h1>Leaderboard</h1>
			{users.map(uid => <DashboardItem key={uid} id={uid} />)}
		</Container>
	)
}
