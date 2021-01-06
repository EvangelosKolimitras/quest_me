import { Container } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { IQuestions } from '../../services/declarations'

interface DefaultRootState {
	questions: IQuestions
	authedUser: string
}

export const Questions: React.FC = () => render(useSelector((state: DefaultRootState) => check(state.authedUser)(state.questions)))

const render = (questions: any) => {
	return (
		<Container>
			<h1>Answered</h1>
			{ questions(true).map(((answer: any) => <p key={answer.id}>{answer.author}</p>))}
			<h1>Not Answered</h1>
			{ questions(false).map(((answer: any) => <p key={answer.id}>{answer.author}</p>))}
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
