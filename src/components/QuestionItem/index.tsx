import React, { FC, useState } from 'react'
import { Avatar, Card, Typography, CardHeader, CardContent, Grid, CardActions, Button, Box, Chip } from '@material-ui/core';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { useStyles } from './styles';
import CheckIcon from '@material-ui/icons/Check';
import { calculatePercentages, capsIt, formatDate } from '../../utils';
import { AuthedUserPartialRootState, QuestionsPartialRootState, UsersPartialRootState } from '../../../common/types';
import { ID, IUser } from '../../../common/types/types';

interface Props { id: ID }

export const QuestionItem: FC<Props> = (props) => {
	const authedUser = useSelector((state: AuthedUserPartialRootState) => state.authedUser!)
	const users = useSelector((state: UsersPartialRootState) => state.users!);
	const questions = useSelector((state: QuestionsPartialRootState) => state.questions!);

	const question = questions![props.id];

	const [answeredQ1] = useState(question.optionOne.votes.includes(authedUser))
	const [answeredQ2] = useState(question.optionTwo.votes.includes(authedUser))

	const calculateTotalVotesPerPoll = (arr: number[]) => {
		return [...arr].reduce((acc, currVal) => acc + currVal, 0);
	}
	const totalVotesPerPoll = calculateTotalVotesPerPoll([question.optionOne.votes.length, question.optionTwo.votes.length]);

	const classes = useStyles();

	const user = users![question.author];
	const { optionOne, optionTwo, timestamp } = question;

	const renderCardTitle = (user: IUser) => {
		const { name, id } = user;
		return `${name}@${id}`
	}

	return (
		<Card className={classes.card} >
			<CardHeader className={classes.header}
				avatar={<Avatar aria-label="recipe" src={user.avatarURL} > user.name[0] </Avatar>}
				action={
					<Box style={{ padding: 10 }}>
						{
							(answeredQ1 || answeredQ2)
								? <CheckIcon className={classes.check} />
								: <Box component="span">
									<Typography variant="subtitle2" className={classes.cardSettings}>
										Not answered yet
									</Typography>
								</Box>
						}
					</Box>
				}
				title={renderCardTitle(user)}
				subheader={formatDate(timestamp)}
			/>
			<CardContent>
				<Grid container justify="flex-start">
					<Grid item xs={12} sm={12} md={12} xl={12}>
						<Box component="div">
							<Typography
								className={classes.cardContentTitle}
								variant="body1"
							>
								Would you rather?
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={12} sm={12} md={12} xl={12}>
						<Box component="div">
							<Typography
								variant="subtitle2"
								className={classes.cardContentTitle}
							>
								<Box component="p">
									<Chip label={`${calculatePercentages(question.optionOne.votes.length, totalVotesPerPoll)}%`} size="small" style={{ marginRight: 5 }} />
									<Box component="span">Option 01: </Box>{optionOne.text !== undefined && capsIt(optionOne.text)}.
								</Box>
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={12} sm={12} md={12} xl={12}>
						<Box component="div">
							<Typography
								variant="subtitle2"
								className={classes.cardContentTitle}
							>
								<Box component="p">
									<Chip label={`${calculatePercentages(question.optionTwo.votes.length, totalVotesPerPoll)}%`} size="small" style={{ marginRight: 5 }} />
									<Box component="span">Option 02: </Box>{optionTwo.text && capsIt(optionTwo.text)}.
								</Box>
							</Typography>
						</Box>
					</Grid>
				</Grid>
			</CardContent>
			<CardActions >
				<Grid container justify="flex-end">
					<Grid item>
						<Button
							component={Link}
							to={`/questions/${props.id}`}
							variant="outlined"
							className={classes.cardContentTitle}
						>	Open
						</Button>
					</Grid>
				</Grid>
			</CardActions>
		</Card >
	)
}
