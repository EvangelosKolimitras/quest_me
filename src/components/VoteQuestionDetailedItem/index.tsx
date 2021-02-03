import { FormControl, RadioGroup, FormControlLabel, Radio, Button, Grid } from "@material-ui/core";
import { FC } from "react";
import { useState } from "react";
import SendIcon from '@material-ui/icons/Send';
import { useStyles } from "./styles";
import { IQuestion } from "../../../common/types/types";

interface PropsVoteQuestionDetailedItem {
	question: IQuestion
	saveQuestionAnswer: (selectedQuestion?: any) => void
}

export const VoteQuestionDetailedItem: FC<PropsVoteQuestionDetailedItem> = (props) => {
	const { saveQuestionAnswer } = props
	const [currentOption, setCurrentOption] = useState("");
	const classes = useStyles();

	const handleChange = (event: any) => setCurrentOption(event.currentTarget.value)

	const handleSubmit = (event: any) => {
		event.preventDefault()
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
								control={
									<Radio
										value="optionOne"
										className={classes.radioOption01}
										name='answer'
										id='optionOne'
										onChange={handleChange}
										checked={currentOption === 'optionOne' ? true : false} color="default"
									/>
								}
								label="Option 1"
							/>
							<FormControlLabel
								labelPlacement="start"
								control={
									<Radio
										name='answer'
										className={classes.radioOption02}
										value="optionTwo"
										onChange={handleChange}
										id='optionTwo'
										checked={currentOption === 'optionTwo' ? true : false} color="default"
									/>
								}
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
						endIcon={
							<SendIcon
								style={{ fontSize: 30 }}
							/>
						}
					>
						Submit
					</Button>
				</Grid>
			</form>
		</>
	)
}