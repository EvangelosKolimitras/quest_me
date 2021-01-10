import { Button, Card, CardContent, CardHeader, Container, makeStyles, TextField, Typography } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addQuestionHandler } from '../../actions/';

interface DefaultRootState { authedUser: string }

export const NewQuestion = () => {
	const authedUser = useSelector((state: DefaultRootState) => state.authedUser)
	const dispatch = useDispatch()
	const [option01, setOption01] = useState("")
	const [option02, setOption02] = useState("")
	const [backToHome, setBackToHome] = useState(false)

	const useStyles = makeStyles({
		container: {
			marginTop: 10,
			width: "90%",
			maxWidth: 1000,
			padding: 10,
			height: "90vh",
			backgroundColor: red[500]
		},
		card: {
			height: 400
		}
	})

	const submitHandler = (e: { preventDefault: Function }) => {
		e.preventDefault();
		dispatch(addQuestionHandler(option01, option02, authedUser))
		//Reset form
		setOption01("")
		setOption02("")
		setBackToHome(true)
	}

	const options = {
		option01: { value: option01, fn: setOption01 },
		option02: { value: option02, fn: setOption02 },
	}
	const classes = useStyles();

	if (backToHome === true)
		return <Redirect to='/questions' />

	return jsx(submitHandler, options, classes);
}

const jsx = (submitHandler: any, options: any, classes: any) =>
	<Container className={classes.container}>
		<Card className={classes.card}>
			<CardHeader className={classes.header}>
				<Typography variant="h2">New Poll</Typography>
			</CardHeader>
			<CardContent>
				<Form submitHandler={submitHandler} options={options} />
			</CardContent>
		</Card>
	</Container>

const Form: React.FC<{ submitHandler: any, options: any }> = ({ submitHandler, options }) =>
	<form onSubmit={submitHandler} >
		<Option01 option01={options.option01} />
		<Option02 option02={options.option02} />
		<SubmitBtn o1={options.option01} o2={options.option02} />
	</form>

const Option01: React.FC<{ option01: any }> = ({ option01 }) =>
	<TextField
		required
		id="option01"
		label="Option 1"
		type="text"
		value={option01.value}
		onChange={(e) => option01.fn(e.target.value)}
	/>

const Option02: React.FC<{ option02: any }> = ({ option02 }) =>
	<TextField
		required
		id="option02"
		label="Option 2"
		type="text"
		value={option02.value}
		onChange={(e) => option02.fn(e.target.value)}
	/>

const SubmitBtn: React.FC<{ o1: any, o2: any }> = ({ o1, o2 }) =>
	<Button
		variant="contained"
		color="primary"
		type="submit"
		disabled={o1.value.length === 0 || o2.value.length === 0}>
		Submit
	</Button>