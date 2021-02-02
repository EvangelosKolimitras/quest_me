import { Button, Container, Typography, Box, Avatar, Badge, Portal, FormControlLabel, Checkbox } from '@material-ui/core'
import React, { MouseEvent, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { IQuestion, IQuestions, IUser, IUsers } from '../../services/declarations'
import { QuestionItem } from '../QuestionItem'
import { Modal } from '../Modal'
import { useStyles } from './styles'
import { sortQuestions } from '../../utils'

interface DefaultRootState {
	questions: IQuestions
	authedUser: string
	users: IUsers
}

export const Questions: React.FC = (props: any): JSX.Element => {

	const authedUser = useSelector((state: DefaultRootState) => state.authedUser)
	const questions = useSelector((state: DefaultRootState) => state.questions)
	const users = useSelector((state: DefaultRootState) => state.users)

	const [allQuestions, setAllQuestions] = useState<any[]>([])
	const [filterSelected, setFilterSelected] = useState(false)
	const classes = useStyles();

	/*
		Creats a section of all users that have created a post except from the user who is currently logged in
		For example.
		if John is logged in the the filter options to select will be all the users except John
	*/
	const filteredUsers = Object.values(users).filter((user: IUser) => user.id !== authedUser)

	const filterQuestionsPerUser = (e: any, userID: string) => {
		e.preventDefault();

		const selectedUserQuetions = Object.values(questions)
			.filter((question: IQuestion) =>
				userID !== "all" ?
					(question.author === userID) :
					(question.author !== userID));

		setAllQuestions(selectedUserQuetions)
		setFilterSelected(!filterSelected)
	}

	useEffect(() => {
		setAllQuestions(Object.values(questions))
	}, [questions])

	return (
		<Container className={classes.root}>
			<Box component="div" className={classes.header}>
				<Typography className={classes.heading} variant="h1">Questions</Typography>
				<Box component="div" mt={2} >
					<Button
						color="primary"
						size="small"
						className={classes.button}
						onClick={(e: MouseEvent) => filterQuestionsPerUser(e, "all")}
					>All</Button>
					{
						filteredUsers.map((user: IUser) =>
							<Button
								key={user.id}
								color="primary"
								name={user.id}
								size="small"
								className={classes.button}
								startIcon={<Avatar alt={`Avatar from ${user.name}`} src={user.avatarURL} />}
								onClick={(e: MouseEvent) => filterQuestionsPerUser(e, user.id)}
							>
								<Badge
									className={classes.badge}
									color={"primary"}
									badgeContent={Object.values(questions).filter((q: IQuestion) => q.author === user.id).length} >
								</Badge>
								{user.name}
							</Button>
						)
					}
					<OnlyAnswered />
				</Box>
			</Box>
			{
				(sortQuestions(allQuestions).map((q: IQuestion) => <QuestionItem key={q.id} id={q.id} />))
			}

			<Portal>
				<Modal />
			</Portal>
		</Container>
	)
}

const OnlyAnswered = () => {
	const [state, setState] = useState(true);
	const classes = useStyles();

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setState(event.target.checked);
	};

	return (
		<FormControlLabel
			className={classes.checkBox}
			control={
				<Checkbox checked={state} onChange={handleChange} name="checkedA" />
			}
			label="Only unanswered"
		/>
	);
}