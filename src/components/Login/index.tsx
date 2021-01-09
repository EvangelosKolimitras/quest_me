import { Container, Grid, makeStyles } from '@material-ui/core'
import { Typography } from '@material-ui/core'
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
	const useStyles = makeStyles({
		loginRoot: {
			marginTop: 50,
		}
	})

	const loginHandler = (userId: IAuthedUser) => dispatch(setAuthedUser(userId))
	return jsx(useStyles(), loginHandler, users)
}

const jsx = (classes: any, loginHandler: Function, users: IUser[]) => (
	<Container maxWidth="md" className={classes.loginRoot}>
		<Grid container justify="center">
			<Grid container md={12} justify="center" >
				<Grid item>
					<Typography variant="h3"> Login </Typography>
				</Grid>
			</Grid>
			<Grid container justify="center">
				<Grid item>
					<Typography variant="inherit" component="p">Please pick up a user to login</Typography>
				</Grid>
			</Grid>
			<Grid container justify="center">
				{
					users.map((user: IUser) => <User
						id={user.id}
						key={user.id}
						loginHandler={loginHandler}
					/>
					)
				}
			</Grid>
		</Grid>
	</Container >
)