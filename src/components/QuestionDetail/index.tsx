import { Avatar, Box, Card, CardContent, CardHeader, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { addAnswerHandler } from '../../actions';
import { IAuthedUser, IQuestion, IQuestions, IUsers } from '../../services/declarations';
import { formatDate } from '../QuestionItem';
import { SummaryQuestionDetailedItem } from '../SummaryQuestionDetailedItem';
import { VoteQuestionDetailedItem } from '../VoteQuestionDetailedItem';

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
	const isAnswered = !!question ? (question.optionOne.votes.includes(authedID) || question.optionTwo.votes.includes(authedID)) : false;
	const vote = isAnswered ? (question.optionTwo.votes.includes(authedID) ? 'optionOne' : 'optionTwo') : null;
	const user = (users && question) ? users[question.author] : null;

	const saveQuestionAnswer = (selectedQuestion?: any) => dispatch(addAnswerHandler(authedUser, id, selectedQuestion));

	const useStyles = makeStyles({
		card: {
			marginTop: 50,
			margin: "auto",
			width: "75%",
			maxWidth: 900,
		}
	})

	const classes = useStyles();

	return (
		<>
			{
				isQuestion &&
				<Grid container justify="center">
					<Card className={classes.card} >
						<Grid item>{createHeader(user!.id, user!.name, user!.avatarURL, question.timestamp)}</Grid>
						<Grid item>{createContent(question, vote, saveQuestionAnswer)}</Grid>
					</Card>
				</Grid>
			}
		</>
	)
}

const createHeader = (id: string, name: string, avatar: string, timestamp: number) =>
	<CardHeader
		avatar={<Avatar aria-label="recipe" src={avatar} ></Avatar>}
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
				{formatDate(timestamp)}
			</Typography>
		}
	/>

const createContent = (question: IQuestion, vote: any, saveQuestionAnswer: (selectedQuestion?: any) => {}) =>
	<CardContent>
		<SummaryQuestionDetailedItem question={question} vote={vote} />
		<VoteQuestionDetailedItem question={question} saveQuestionAnswer={saveQuestionAnswer} />
	</CardContent>