import { Container } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { IUsers } from '../../services/declarations'

interface DefaultRootState {
	users: IUsers
}

export const Dashboard: React.FC = () => {
	let users = sortUsers(useSelector((state: DefaultRootState) => state.users))
	return (
		<Container maxWidth="md">
			<h1>Dashboard</h1>
			{
				users.map(uid => <p key={uid}>{uid}</p>)
			}
		</Container>
	)
}

const sortUsers = (users: IUsers) =>
	Object
		.keys(users)
		.sort((a, b) =>
			sort(users)(a, b)
		)

const calculate = (users: IUsers) => (x: string) => Object.keys(users[x].answers).length + users[x].questions.length
const sort = (users: IUsers) => (a: string, b: string) => calculate(users)(b) - calculate(users)(a)
