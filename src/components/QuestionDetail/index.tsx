import { Avatar, Card, CardContent, CardHeader, IconButton, makeStyles, Typography } from '@material-ui/core';
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
			width: "75%"
		}
	})

	const classes = useStyles();

	return (
		<>
			{
				isQuestion &&
				<Card className={classes.card} >
					{createHeader(user!.name, user!.avatarURL)}
					{createContent(question, vote, saveQuestionAnswer)}
				</Card>
			}
		</>
	)
}

const createHeader = (name: string, avatar: string) =>
	<CardHeader
		avatar={<Avatar aria-label="recipe" src={avatar} ></Avatar>}
		action={
			<IconButton aria-label="settings">
			</IconButton>
		}
		title={name}
	/>

const createContent = (question: IQuestion, vote: any, saveQuestionAnswer: (selectedQuestion?: any) => {}) =>
	<CardContent>
		<Typography variant="caption" color="textSecondary" component="p">
			{formatDate(question.timestamp)}
		</Typography>
		<SummaryQuestionDetailedItem question={question} vote={vote} />
		<VoteQuestionDetailedItem question={question} saveQuestionAnswer={saveQuestionAnswer} />
	</CardContent>