import { FormControl, RadioGroup, FormControlLabel, Radio, Button, Grid } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { IQuestion } from "../../services/declarations";
import SendIcon from '@material-ui/icons/Send';
import { useStyles } from "./styles";

interface PropsVoteQuestionDetailedItem {
	question: IQuestion
	saveQuestionAnswer: (selectedQuestion?: any) => void
}

export const VoteQuestionDetailedItem: React.FC<PropsVoteQuestionDetailedItem> = ({ question, saveQuestionAnswer }) => {
	const [currentOption, setCurrentOption] = useState("");
	const classes = useStyles();

	const handleChange = (e: any) => setCurrentOption(e.currentTarget.value)

	const handleSubmit = (e: any) => {
		e.preventDefault()
		saveQuestionAnswer(currentOption);
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<Grid container justify="center">
					<FormControl className={classes.radios} component="fieldset">
						<RadioGroup row>
							<FormControlLabel
								labelPlacement="end"
								control={<Radio value="optionOne"
									className={classes.radioOption01}
									name='answer'
									id='optionOne'
									onChange={handleChange}
									checked={currentOption === 'optionOne' ? true : false} color="default" />}
								label="Option 1"
							/>
							<FormControlLabel
								labelPlacement="start"
								control={<Radio name='answer'
									className={classes.radioOption02}
									value="optionTwo"
									onChange={handleChange}
									id='optionTwo'
									checked={currentOption === 'optionTwo' ? true : false} color="default" />}
								label="Option 2"
							/>
						</RadioGroup>
					</FormControl>
				</Grid>
				<Grid container justify="center">
					<Button
						className={classes.btn}
						type='submit'
						variant="outlined"
						endIcon={<SendIcon style={{ fontSize: 30 }} />}
					>
						Submit
					</Button>
				</Grid>
			</form>
		</>
	)
}