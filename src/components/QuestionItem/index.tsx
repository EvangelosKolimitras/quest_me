import React from 'react'
import { Avatar, CardActionArea, createStyles, makeStyles, Theme, Card, Typography, CardHeader, IconButton, CardContent } from '@material-ui/core';
import { lightBlue } from '@material-ui/core/colors';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { IQuestions, IUsers } from '../../services/declarations'

interface DefaultRootState { users?: IUsers, questions?: IQuestions }

interface Props {
	id: string
}

const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		card: {
			maxWidth: 445,
			height: 300,
			margin: "auto",
			marginBottom: 20,
			color: "white"
		},
		avatar: {
			backgroundColor: lightBlue[700],
		},
	})
})

export const QuestionItem: React.FC<Props> = (props) => {

	const users = useSelector((state: DefaultRootState) => state.users);
	const questions = useSelector((state: DefaultRootState) => state.questions);
	console.log(questions);

	const classes = useStyles();

	const question = questions![props.id];
	const user = users![question.author];
	const { optionOne, optionTwo, timestamp } = question;

	return (
		<Card className={classes.card} >
			<CardHeader className={classes.avatar}
				avatar={<Avatar aria-label="recipe" src={user.avatarURL} > R </Avatar>}
				action={
					<IconButton aria-label="settings">
					</IconButton>
				}
				title={user.name}
				subheader={`@${user.id}`}
			/>
			<CardContent>
				<Typography variant="h6" color="textPrimary">
					Would you rather ?
				</Typography>

				<Typography variant="subtitle2" color="textPrimary">
					<p>{optionOne.text}</p>
				</Typography>

				<Typography variant="subtitle2" color="textPrimary" >
					<p>{optionTwo.text}</p>
				</Typography>

				<Typography variant="body2" color="textSecondary" component="p">
					{formatDate(timestamp)}
				</Typography>

				<CardActionArea>
					<Link to={`/questions/${props.id}`}>Open</Link>
				</CardActionArea>
			</CardContent>
		</Card >
	)
}

export function formatDate(timestamp: number) {
	const date = new Date(timestamp)
	const time = date.toLocaleTimeString('de-DE')
	return time + ' | ' + date.toLocaleDateString()
}
