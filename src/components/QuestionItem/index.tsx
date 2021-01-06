import { Avatar, CardActionArea, createStyles, makeStyles, Theme } from '@material-ui/core';
import { CardHeader } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Card } from '@material-ui/core';
import { lightBlue } from '@material-ui/core/colors';
import React from 'react'
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
	const classes = useStyles();

	const question = questions![props.id];
	const user = users![question.author]

	const { id, name, avatarURL: avatar } = user
	const { optionOne, optionTwo, timestamp } = question

	return (
		<Card className={classes.card} >
			<CardHeader className={classes.avatar}
				avatar={<Avatar aria-label="recipe" src={avatar} > R </Avatar>}
				action={
					<IconButton aria-label="settings">
					</IconButton>
				}
				title={name}
				subheader={`@${id}`}
			/>
			<CardContent>
				<Typography variant="h6" color="textPrimary">
					Would you rather ?
					
					<Typography variant="subtitle2" >
						<p>{optionOne.text}</p>
					</Typography>

					<Typography variant="subtitle2" >
						<p>{optionTwo.text}</p>
					</Typography>

					<Typography variant="body2" color="textSecondary" component="p">
						{formatDate(timestamp)}
					</Typography>
					
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
