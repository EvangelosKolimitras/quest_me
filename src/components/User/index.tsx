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

	const classes = useStyles();
	const loginClickHandler = (e: Event) => loginHandler(id)
	return render(users[id], classes, loginClickHandler)
}

const render = (user: IUser, classes: any, loginClickHandler: Function): JSX.Element =>
	<Card className={classes.card}> {content(classes, user, loginClickHandler)} </Card>

const content = (classes: any, user: any, loginClickHandler: Function) => <CardContent>
	{renderAvatar(classes.img, user.avatarURL, user.name)}
	{renderName(user.name)}
	{loginClickHandler && renderLoginBtn("primary", "contained", loginClickHandler)}
</CardContent>

const renderLoginBtn = (color: any, variant: any, fn: Function): JSX.Element =>
	<Button variant={variant} color={color} onClick={() => fn}> Login </Button>

const renderAvatar = (classes: any, image: string, name: string): JSX.Element =>
	<CardMedia className={classes} image={image} title={name} />

const renderName = (name: string): JSX.Element =>
	<Typography variant="h5"> {name} </Typography>