import { Box, CardContent } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { Card } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAuthedUser } from '../../actions/authedUser'
import { IAuthedUser, IUser, IUsers } from '../../services/declarations'
import { User } from '../User'

interface DefaultRootState { users: IUsers }

export const Login: React.FC = () => {
	const dispatch = useDispatch();
	const usrs = useSelector((state: DefaultRootState) => state.users)
	const users = Object.values(usrs)

	const loginHandler = (userId: IAuthedUser) => dispatch(setAuthedUser(userId))
	return jsx(loginHandler, users)
}

const jsx = (loginHandler: Function, users: IUser[]) => (
	<Card>
		<CardContent>
			<Typography variant="h3"> Login </Typography>
			<Typography variant="h4">In order to use this application you must be authenticated.</Typography>
			<Typography variant="h6">Please pick up a user to login</Typography>
			<Box>
				{
					users.map((user: IUser) => <User
						id={user.id}
						key={user.id}
						loginHandler={loginHandler}
					/>
					)
				}
			</Box>
		</CardContent>
	</Card >
)