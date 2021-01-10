import { Avatar, Card, CardContent, CardHeader, IconButton, makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addAnswerHandler } from '../../actions';
import { IAuthedUser, IQuestion, IQuestions, IUsers } from '../../services/declarations';
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

	const saveQuestionAnswer = (selectedQuestion?: any) => {
		dispatch(addAnswerHandler(authedUser, id, selectedQuestion));
	}

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
						<SummaryQuestionDetailedItem
							question={question}
							vote={vote}
						/>
						<VoteQuestionDetailedItem
							question={question}
							saveQuestionAnswer={saveQuestionAnswer}
						/>
					</CardContent>
				</Card>
			}
		</>
	)
}

interface PropsSummaryQuestionDetailedItem {
	question: any,
	vote: any
}
const SummaryQuestionDetailedItem: React.FC<PropsSummaryQuestionDetailedItem> = ({ question, vote }) => {
	const q1Votes = question.optionOne.votes.length
	const q2Votes = question.optionTwo.votes.length;
	const totalAnswers = q1Votes + q2Votes;
	const q1Percentage = q1Votes === 0 ? 0 : Math.round((q1Votes / totalAnswers) * 100);
	const q2Percentage = q2Votes === 0 ? 0 : Math.round((q2Votes / totalAnswers) * 100);
	const q1Style = { width: `${q1Percentage}%` }
	const q2Styles = { width: `${q2Percentage}%` }

	return <p>
		<h3>Would you rather ?</h3>
		<p>{question.optionOne.text} {vote === 'optionOne' && (<span>Your choice</span>)}</p>
		<div> <div style={q1Style}></div> </div>
		<p>Voted by: {q1Votes} people</p>
		<p>{q1Percentage}%</p>
		<p >{question.optionTwo.text} {vote === 'optionTwo' && (<span>Your choice</span>)}</p>
		<div> <div style={q2Styles}></div> </div>
		<p>Voted by: {q2Votes} people</p>
		<p>{q2Percentage}%</p>
		<NavLink to='/' exact className='btn btn-primary'>Back</NavLink>
	</p>
}

interface PropsVoteQuestionDetailedItem {
	question: IQuestion
	saveQuestionAnswer: (selectedQuestion?: any) => void
}
const VoteQuestionDetailedItem: React.FC<PropsVoteQuestionDetailedItem> = ({ question, saveQuestionAnswer }) => {

	const [currentOption, setCurrentOption] = useState("");

	const handleChange = (e: any) => setCurrentOption(e.currentTarget.value)

	const handleSubmit = (e: any) => {
		e.preventDefault()
		saveQuestionAnswer(currentOption);
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className="form-check">
					<input
						className="form-check-input"
						type='radio'
						id='optionOne'
						value='optionOne'
						onChange={handleChange}
						name='answer'
						checked={currentOption === 'optionOne' ? true : false}
					>
					</input>
					<label
						className="form-check-label"
						htmlFor='optionOne'>{question.optionOne.text}
					</label>
				</div>
				<div className="form-check">
					<input
						className="form-check-input"
						type='radio'
						id='optionTwo'
						value='optionTwo'
						onChange={handleChange}
						name='answer'
						checked={currentOption === 'optionOne' ? true : false}
					>
					</input>
					<label
						className="form-check-label"
						htmlFor='optionTwo'>{question.optionTwo.text}
					</label>
				</div>
				<button
					className='btn btn-primary'
					type='submit'
				>Submit
            </button>
			</form>
		</>
	)
}