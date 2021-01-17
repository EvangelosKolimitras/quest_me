import { CardContent, Card, CardMedia, Typography, Button, Grid } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { IUsers } from '../../services/declarations'
import { useStyles } from './styles'

interface DefaultRootState { users: IUsers }
interface Props { loginHandler: Function, id: string }

export const User: React.FC<Props> = ({ id, loginHandler }) => {
	const users = useSelector((state: DefaultRootState) => state.users);
	const classes = useStyles();
	const loginClickHandler = () => loginHandler(id)
	const user = users[id]

	return <Grid item xs={12} sm={6} md={3}>
		<Card className={classes.card}>
			<Grid item >
				<CardContent>
					<Grid item>
						{renderAvatar(classes.img, user.avatarURL, user.name)}
					</Grid>
					<Grid item className={classes.name}>
						{renderName(user.name.split(" ")[0])}
					</Grid>
					<Grid item className={classes.btn}>
						{renderLoginBtn(loginClickHandler)}
					</Grid>
				</CardContent>
			</Grid>
		</Card>
	</Grid>
}

const renderLoginBtn = (fn: Function): JSX.Element =>
	<Button variant="contained" color="primary" onClick={() => fn()}>Login</Button>

const renderAvatar = (classes: any, image: string, name: string): JSX.Element =>
	<CardMedia className={classes} image={image} title={name} />

const renderName = (name: string): JSX.Element =>
	<Typography variant="h5"> {name} </Typography>