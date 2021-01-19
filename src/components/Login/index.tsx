import { Container, Grid } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAuthedUser } from '../../actions/authedUser'
import { IAuthedUser, IUser, IUsers } from '../../services/declarations'
import { User } from '../User'
import { useStyles } from './styles'

interface DefaultRootState { users: IUsers }

export const Login: React.FC = React.memo(() => {
	const dispatch = useDispatch();
	const usrs = useSelector((state: DefaultRootState) => state.users)
	const users = Object.values(usrs)
	const loginHandler = (userId: IAuthedUser) => dispatch(setAuthedUser(userId))
	const classes = useStyles();

	return (
		<Container maxWidth="md" className={classes.loginRoot}>
			<Grid container justify="center">
				<Grid container justify="center" >
					<Grid item >
						<Typography variant="h3"> Login </Typography>
					</Grid>
				</Grid>
				<Grid container justify="center">
					<Grid item>
						<Typography variant="inherit" component="p">Please pick up a user to login</Typography>
					</Grid>
				</Grid>
				<Grid container justify="center">
					{users.map((user: IUser) =>
						<User
							id={user.id}
							key={user.id}
							loginHandler={loginHandler}
						/>
					)}
				</Grid>
			</Grid>
		</Container >
	)
})
