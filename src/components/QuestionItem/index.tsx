import { FC, useState } from 'react'
import { Avatar, Card, Typography, CardHeader, IconButton, CardContent, Grid, CardActions, Button, Box } from '@material-ui/core';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { useStyles } from './styles';
import CheckIcon from '@material-ui/icons/Check';
import { capsIt, formatDate } from '../../utils';
import { AuthedUserPartialRootState, QuestionsPartialRootState, UsersPartialRootState } from '../../../common/types';
import { ID } from '../../../common/types/types';

interface Props { id: ID }

export const QuestionItem: FC<Props> = (props) => {
	const authedUser = useSelector((state: AuthedUserPartialRootState) => state.authedUser!)
	const users = useSelector((state: UsersPartialRootState) => state.users);
	const questions = useSelector((state: QuestionsPartialRootState) => state.questions);

	const question = questions![props.id as string];

	const [answeredQ1] = useState(question.optionOne.votes.includes(authedUser))
	const [answeredQ2] = useState(question.optionTwo.votes.includes(authedUser))

	const classes = useStyles();

	const user = users![question.author];
	const { optionOne, optionTwo, timestamp } = question;

	return (
		<Card className={classes.card} >
			<CardHeader className={classes.header}
				avatar={<Avatar aria-label="recipe" src={user.avatarURL} > user.name[0] </Avatar>}
				action={<IconButton aria-label="settings">
					{
						(answeredQ1 || answeredQ2)
							? <CheckIcon className={classes.check} />
							: <Box component="span">
								<Typography variant="subtitle2" className={classes.cardSettings}>
									Not answered yet
									</Typography>
							</Box>
					}
				</IconButton>}
				title={user.name}
				subheader={`@${user.id}`}
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
					<Box component="div" className={classes.marg} />
					<Grid item xs={12} sm={12} md={12} xl={12}>
						<Box component="div">
							<Typography
								variant="subtitle2"
								className={classes.cardContentTitle}
							>
								<Box component="p">
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
									<Box component="span">Option 02: </Box>{optionTwo.text && capsIt(optionTwo.text)}.
								</Box>
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={12} sm={12} md={12} xl={12}>
						<Grid container justify="flex-end">
							<Box component="div">
								<Typography
									variant="body2"
									component="p"
									className={classes.cardContentTitle}
								>
									{formatDate(timestamp)}
								</Typography>
							</Box>
						</Grid>
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