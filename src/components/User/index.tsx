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
	const loginClickHandler = () => {
		console.log('3');
		return loginHandler(id)
	}

	// return jsx(users[id], classes, loginClickHandler)
	return <Card className={classes.card}>
		<CardContent>
			{renderAvatar(classes.img, users[id].avatarURL, users[id].name)}
			{renderName(users[id].name)}
			{/* <Button variant={"contained"} color={"primary"} onClick={() => loginClickHandler}> Login </Button> */}
			<button onClick={loginClickHandler}>ok</button>
		</CardContent>
	</Card>
}

// const jsx = (user: IUser, classes: any, loginClickHandler: Function): JSX.Element =>
// <Card className={classes.card}>
// 	{/* {content(classes, user, loginClickHandler)} */}
// 	<CardContent>
// 		{renderAvatar(classes.img, user.avatarURL, user.name)}
// 		{renderName(user.name)}
// 		{/* {loginClickHandler && renderLoginBtn("primary", "contained", loginClickHandler)} */}
// 		<Button variant={"contained"} color={"primary"} onClick={() => loginClickHandler}> Login </Button>
// 	</CardContent>
// </Card>

// const content = (classes: any, user: any, loginClickHandler: Function) =>
// 	<CardContent>
// 		{renderAvatar(classes.img, user.avatarURL, user.name)}
// 		{renderName(user.name)}
// 		{/* {loginClickHandler && renderLoginBtn("primary", "contained", loginClickHandler)} */}
// 		<Button variant={"contained"} color={"primary"} onClick={() => loginClickHandler}> Login </Button>
// 	</CardContent>

// const renderLoginBtn = (color: any, variant: any, fn: Function): JSX.Element =>
// 	<Button variant={variant} color={color} onClick={() => fn}> Login </Button>

const renderAvatar = (classes: any, image: string, name: string): JSX.Element =>
	<CardMedia className={classes} image={image} title={name} />

const renderName = (name: string): JSX.Element =>
	<Typography variant="h5"> {name} </Typography>