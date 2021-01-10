import { Avatar, Card, CardContent, CardHeader, IconButton, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { IAuthedUser, IQuestions, IUsers } from '../../services/declarations';
import { formatDate } from '../QuestionItem';

interface DefaultRootState {
	authedUser: IAuthedUser
	questions: IQuestions
	users: IUsers
}

export const QuestionDetail = (props: any) => {
	const dispatch = useDispatch()
	const authedUser = useSelector((state: DefaultRootState) => state.authedUser)
	const questions = useSelector((state: DefaultRootState) => state.questions)
	const users = useSelector((state: DefaultRootState) => state.users)

	const id = props.match.params.id;
	const authedID = Object.keys(users).filter((el: any) => el === authedUser)[0]
	const question = questions[id]
	const isQuestion = question ? true : false;
	const isAnswered = !!question ?
		(question.optionOne.votes.includes(authedID) ||
			question.optionTwo.votes.includes(authedID)) : false;
	const vote = isAnswered ? (question.optionTwo.votes.includes(authedID) ? 'optionOne' : 'optionTwo') : null;
	const user = (users && question) ? users[question.author] : null;

	const useStyles = makeStyles({
		card: {
			marginTop: 50,
			width: "50%"
		}
	})

	const classes = useStyles();
	return (
		<>
			{
				isQuestion &&
				<Card className={classes.card} >
					<CardHeader
						avatar={<Avatar aria-label="recipe" src={user!.avatarURL} > R </Avatar>}
						action={
							<IconButton aria-label="settings">
							</IconButton>
						}
						title={user!.name}
					/>
					<CardContent>
						<Typography variant="caption" color="textSecondary" component="p">
							{formatDate(question.timestamp)}
						</Typography>
					</CardContent>
				</Card>
			}
		</>
	)
}

