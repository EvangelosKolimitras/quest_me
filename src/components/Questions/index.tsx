import { Button, Container, Typography, makeStyles, Box } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { IQuestions } from '../../services/declarations'
import { QuestionItem } from '../QuestionItem'
import { Modal } from '../Modal'

interface DefaultRootState {
	questions: IQuestions
	authedUser: string
}

export const Questions: React.FC = (props: any) => {
	const useStyles = makeStyles({
		header: {
			margin: "2rem auto",
			textAlign: "center"
		},
		heading: {
			fontSize: "4rem",
			textAlign: "center"
		},
		button: {
			marginTop: "1.2rem",
			marginLeft: ".5rem",
			marginRight: ".5rem",
		},
		addIcon: {
			position: "fixed",
			bottom: "5%",
			right: "5%"
		}
	})

	const classes = useStyles();
	return render(props, classes, useSelector((state: DefaultRootState) => check(state.authedUser)(state.questions)))
}

const render = (props: { match: { url: any } }, classes: { header: string, heading: string, button: string, addIcon: any }, questions: any) => {
	return (
		<Container>
			<Box component="div" className={classes.header}>
				<Typography className={classes.heading} variant="h1">Questions</Typography>
				<Button variant="outlined" color="primary" className={classes.button}>
					All {questions(false).length + questions(false).length}
				</Button>
				<Button variant="contained" color="primary" className={classes.button}>
					Not answered {questions(false).length}
				</Button>
				<Button variant="contained" color="secondary" className={classes.button}>
					Answered {questions(true).length}
				</Button>
			</Box>

			{ questions(true).map(((answer: any) => <QuestionItem key={answer.id} id={answer.id} />))}
			{ questions(false).map(((answer: any) => <QuestionItem key={answer.id} id={answer.id} />))}

			<Modal styles={{
				position: "fixed",
				bottom: "5%",
				right: "5%"
			}} />
		</Container>
	)
}

const check = (authedUser: string) => (questions: IQuestions) => {
	return (isAnswered: boolean) => {
		return Object.values(questions).filter((question) => {
			if (isAnswered) return (!question.optionOne.votes.includes(authedUser) || !question.optionTwo.votes.includes(authedUser))
			return (!question.optionOne.votes.includes(authedUser) && !question.optionTwo.votes.includes(authedUser))
		})
	}
}
