import { Container } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { IQuestions } from '../../services/declarations'
import { QuestionItem } from '../QuestionItem'

interface DefaultRootState {
	questions: IQuestions
	authedUser: string
}

export const Questions: React.FC = () => render(useSelector((state: DefaultRootState) => check(state.authedUser)(state.questions)))

const render = (questions: any) => {
	return (
		<Container>
			<h1>Questions</h1>
			{ questions(true).map(((answer: any) => <QuestionItem key={answer.id} id={answer.id} />))}
			{ questions(false).map(((answer: any) => <QuestionItem key={answer.id} id={answer.id} />))}
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
