import { CardContent, Card, CardMedia, Typography, Button, Grid } from '@material-ui/core'
import { FC } from 'react'
import { useSelector } from 'react-redux'
import { UsersPartialRootState } from '../../../common/types'
import { useStyles } from './styles'

interface Props { loginHandler: Function, id: string }

export const User: FC<Props> = ({ id, loginHandler }) => {
	const users = useSelector((state: UsersPartialRootState) => state.users!);
	const classes = useStyles();
	const loginClickHandler = () => loginHandler(id)
	const user = users[id]

	return <Grid item>
		<Card className={classes.card}>
			<Grid item >
				<CardContent>
					<Grid container>
						<Grid item xs={12}>
							{renderAvatar(classes.img, user.avatarURL, user.name)}
						</Grid>
						<Grid item xs={12} className={classes.name}>
							{renderName(user.name.split(" ")[0])}
						</Grid>
						<Grid item xs={12} className={classes.btn}>
							{renderLoginBtn(loginClickHandler)}
						</Grid>
					</Grid>
				</CardContent>
			</Grid>
		</Card>
	</Grid>
}

const renderLoginBtn = (fn: Function): JSX.Element =>
	<Button variant="contained" onClick={() => fn()}>Login</Button>

const renderAvatar = (classes: any, image: string, name: string): JSX.Element =>
	<CardMedia className={classes} image={image} title={name} />

const renderName = (name: string): JSX.Element =>
	<Typography variant="h5"> {name} </Typography>