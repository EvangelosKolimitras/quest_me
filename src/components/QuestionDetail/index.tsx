import { Avatar, Box, Card, CardContent, CardHeader, Grid, IconButton, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { AuthedUserPartialRootState, QuestionsPartialRootState, UsersPartialRootState } from '../../../common/types';
import { IQuestion, IUser, } from '../../../common/types/types';
import { addAnswerHandler } from '../../actions';
import { formatDate } from '../../utils';
import { SummaryQuestionDetailedItem } from '../SummaryQuestionDetailedItem';
import { VoteQuestionDetailedItem } from '../VoteQuestionDetailedItem';
import { useStyles } from './styles';

export const QuestionDetail = (props: any) => {
	const dispatch = useDispatch()
	const authedUser = useSelector((state: AuthedUserPartialRootState) => state.authedUser)
	const questions = useSelector((state: QuestionsPartialRootState) => state.questions!)
	const users = useSelector((state: UsersPartialRootState) => state.users!)
	const classes = useStyles();

	const id = props.match.params.id;
	const authedID = Object.keys(users).filter((el: any) => el === authedUser)[0];
	const question = questions[id];
	const isQuestion = question ? true : false;
	const isAnswered = !!question ? (question.optionOne.votes.includes(authedID) || question.optionTwo.votes.includes(authedID)) : false;
	const vote = isAnswered ? (question.optionTwo.votes.includes(authedID) ? 'optionOne' : 'optionTwo') : null;
	const user = (users && question) ? users[question.author] : null;

	const saveQuestionAnswer = (selectedQuestion?: any) =>
		dispatch(addAnswerHandler(authedUser, id, selectedQuestion));

	return (
		<>
			{
				isQuestion &&
				<Grid container justify="center" className={classes.root}>
					<Card className={classes.card}>
						<Grid item>{createHeader({ id: user!.id, name: user!.name, avatar: user!.avatarURL, timestamp: question!.timestamp })}</Grid>
						<Grid item>{createContent(question, vote, saveQuestionAnswer)}</Grid>
					</Card>
				</Grid>
			}
		</>
	)
}

const createHeader = <T extends Partial<IUser & IQuestion>>({ id, name, avatarURL, timestamp }: T): JSX.Element =>
	<CardHeader
		avatar={<Avatar aria-label="recipe" src={avatarURL!} ></Avatar>}
		action={<IconButton aria-label="settings"> </IconButton>}
		title={
			<>
				<Typography variant="body1" color="primary" component="p">
					{name}
					<Box style={{ fontSize: 12 }} color="textSecondary" component="span"> @{id} </Box>
				</Typography>
			</>
		}
		subheader={
			<Typography variant="caption" color="textSecondary" component="p">
				{formatDate(timestamp!)}
			</Typography>
		}
	/>

const createContent = (question: IQuestion, vote: any, saveQuestionAnswer: (selectedQuestion?: any) => {}) =>
	<CardContent>
		<SummaryQuestionDetailedItem question={question} vote={vote} />
		<VoteQuestionDetailedItem question={question} saveQuestionAnswer={saveQuestionAnswer} />
	</CardContent>