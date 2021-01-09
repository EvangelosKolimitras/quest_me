import { CardContent, Card, CardMedia, makeStyles, Typography, Button } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { IUser, IUsers } from '../../services/declarations'

interface DefaultRootState { users: IUsers }
interface Props { loginHandler: Function, id: string }

export const User: React.FC<Props> = ({ id, loginHandler }) => {
	const users = useSelector((state: DefaultRootState) => state.users)
	const useStyles = makeStyles({
		card: {
			width: "30%",
			margin: 10,
			float: "left",
			textAlign: "center",
			padding: 10
		},
		img: {
			maxWidth: 250,
			height: 250,
			margin: "auto"
		}
	})

	const loginClickHandler = () => loginHandler(id)
	return jsx(users[id], useStyles(), loginClickHandler)
}

const jsx = (user: IUser, classes: any, loginClickHandler: Function): JSX.Element =>
	<Card className={classes.card}>
		<CardContent>
			{renderAvatar(classes.img, user.avatarURL, user.name)}
			{renderName(user.name)}
			{renderLoginBtn(loginClickHandler)}
		</CardContent>
	</Card>

const renderLoginBtn = (fn: Function): JSX.Element =>
	<Button variant="contained" color="primary" onClick={() => fn()}>Login</Button>

const renderAvatar = (classes: any, image: string, name: string): JSX.Element =>
	<CardMedia className={classes} image={image} title={name} />

const renderName = (name: string): JSX.Element =>
	<Typography variant="h5"> {name} </Typography>