import { Avatar, Badge, Box, Button, Checkbox, Container, FormControlLabel, Portal, Typography } from '@material-ui/core';
import React, { ChangeEvent, FC, MouseEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { IQuestion, IQuestions, IUser, IUsers } from '../../services/declarations';
import { sortQuestions } from '../../utils';
import { Modal } from '../Modal';
import { QuestionItem } from '../QuestionItem';
import { useStyles } from './styles';

interface DefaultRootState {
	questions: IQuestions
	authedUser: string
	users: IUsers
}

export const Questions: FC = (props: any): JSX.Element => {

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
	*/ const filteredUsers = Object.values(users).filter((user: IUser) => user.id !== authedUser)

	const filterQuestionsPerUser = (event: MouseEvent, userID: string) => {
		event.preventDefault();
		const selectedUserQuetions = Object.values(questions).filter((question: IQuestion) => (question.author === userID));
		if (userID === "all") {
			return setAllQuestions(Object.values(questions));
		}
		setAllQuestions(selectedUserQuetions);
		setFilterSelected(!filterSelected)
	}

	const showUnansweredQuestionsHandler = (event: CheckInputElementUnansweredQuestions) => {
		if (event.target.checked) {
			setAllQuestions(
				Object.values(questions).filter((q: IQuestion) => {
					return ![q.optionOne, q.optionTwo].some(q => {
						return q.votes.includes(authedUser);
					});
				}));
		} else {
			setAllQuestions(Object.values(questions))
		}
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
						onClick={(event: MouseEvent) => filterQuestionsPerUser(event, "all")}
					>All</Button>
					{filteredUsers.map((user: IUser) =>
						<Button
							key={user.id}
							color="primary"
							name={user.id}
							size="small"
							className={classes.button}
							startIcon={<Avatar alt={`Avatar from ${user.name}`} src={user.avatarURL} />}
							onClick={(event: MouseEvent) => filterQuestionsPerUser(event, user.id)} >
							<Badge
								className={classes.badge}
								color={"primary"}
								badgeContent={Object.values(questions).filter((q: IQuestion) => q.author === user.id).length} >
							</Badge>
							{user.name}
						</Button>
					)}
					<OnlyAnswered showUnansweredQuestionsHandler={showUnansweredQuestionsHandler} />
				</Box>
			</Box>
			{ (sortQuestions(allQuestions).map((q: IQuestion) => <QuestionItem key={q.id} id={q.id} />))}
			<Portal>
				<Modal />
			</Portal>
		</Container>
	)
}

type CheckInputElementUnansweredQuestions = ChangeEvent<HTMLInputElement>

interface Props {
	showUnansweredQuestionsHandler: (event: CheckInputElementUnansweredQuestions) => void
}

const OnlyAnswered: FC<Props> = (props) => {
	const [state, setState] = useState(false);
	const classes = useStyles();
	const { showUnansweredQuestionsHandler } = props;

	const handleChange = <E extends CheckInputElementUnansweredQuestions>(event: E) => {
		showUnansweredQuestionsHandler(event);
		setState(!state);
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