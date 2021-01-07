import { CardContent, Card } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { IUsers } from '../../services/declarations'

interface DefaultRootState { users: IUsers }
interface Props { id: string }

export const User: React.FC<Props> = (props) => {
	const users = useSelector((state: DefaultRootState) => state.users)
	const u = users[props.id];
	return render({ avatar: u.avatarURL, name: u.name, })
}

const render = (user: { name: string, avatar: string }): JSX.Element => (
	<Card className='card'>
		<CardContent>
			<img src={user.avatar} className='card-img-top' alt={`Avatar of ${User.name}`} />
			<div className='card-body'>
				<h5 className='card-title'>{User.name}</h5>
			</div>
		</CardContent>
	</Card>
)