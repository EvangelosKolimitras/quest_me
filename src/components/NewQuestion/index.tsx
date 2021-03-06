import { Button, TextField } from '@material-ui/core';
import { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { AuthedUserPartialRootState } from '../../../common/types';
import { addQuestionHandler } from '../../actions/';
import { useStyles } from './styles';

interface Props {
	closeModalOnSubmit: Function;
}

export const NewQuestion: FC<Props> = (props) => {
	const authedUser = useSelector((state: AuthedUserPartialRootState) => state.authedUser!)
	const dispatch = useDispatch()
	const [option01, setOption01] = useState("")
	const [option02, setOption02] = useState("")
	const [backToHome, setBackToHome] = useState(false)
	const classes = useStyles();

	const submitHandler = (event: { preventDefault: Function }) => {
		event.preventDefault();
		dispatch(addQuestionHandler(option01, option02, authedUser))
		//Reset form
		setOption01("")
		setOption02("")
		setBackToHome(true)
		props.closeModalOnSubmit(true)
	}

	const options = {
		option01: { value: option01, fn: setOption01 },
		option02: { value: option02, fn: setOption02 },
	}

	if (backToHome === true)
		return <Redirect to='/questions' />

	return jsx(submitHandler, options, classes);
}

const jsx = (submitHandler: any, options: any, classes: any) =>
	<form onSubmit={submitHandler} >
		<Option01 option01={options.option01} classes={classes} />
		<Option02 option02={options.option02} classes={classes} />
		<Button
			variant="contained"
			color="primary"
			type="submit"
			className={classes.btn}
			onClick={submitHandler}
			disabled={[options.option01.value, options.option02.value].some((option: string) => option.length === 0)}>
			Submit
	</Button>
	</form>

const Option01: FC<{ option01: any, classes: any }> = ({ option01, classes }) =>
	<TextField
		inputProps={{ className: classes.input }}
		autoComplete='off'
		autoFocus
		required
		id="option01"
		margin="dense"
		label="Option 1"
		type="text"
		fullWidth
		value={option01.value}
		onChange={(event) => option01.fn(event.target.value)}
	/>

const Option02: FC<{ option02: any, classes: any }> = ({ option02, classes }) =>
	<TextField
		inputProps={{ className: classes.input }}
		autoComplete='off'
		margin="dense"
		fullWidth
		required
		id="option02"
		label="Option 2"
		type="text"
		value={option02.value}
		onChange={(event) => option02.fn(event.target.value)}
	/>