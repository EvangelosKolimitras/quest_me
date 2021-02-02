import { Button, Card, Grid } from "@material-ui/core";
import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { BarChar } from "../Char";
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import { useStyles } from "./styles";

interface PropsSummaryQuestionDetailedItem {
	question: any,
	vote: any,
}

export const SummaryQuestionDetailedItem: FC<PropsSummaryQuestionDetailedItem> = (props) => {
	const { question } = props;
	const classes = useStyles();
	const q1Votes = question.optionOne.votes.length
	const q2Votes = question.optionTwo.votes.length;
	const totalAnswers = q1Votes + q2Votes;

	const percentages = {
		q1: q1Votes === 0 ? 0 : Math.round((q1Votes / totalAnswers) * 100),
		q2: q2Votes === 0 ? 0 : Math.round((q2Votes / totalAnswers) * 100)
	}

	let data = [
		{ label: question.optionOne.text, value: q1Votes },
		{ label: question.optionTwo.text, value: q2Votes }
	];

	return <Card className={classes.card}>
		<BarChar data={data} percentages={percentages} />
		<Grid container justify="flex-end">
			<NavLink style={{ textDecoration: "none", marginTop: 10 }} to='/questions' exact>
				<Button
					variant="text"
					color="primary"
					size="large"
					startIcon={<ArrowBackIosRoundedIcon fontSize="inherit" />}
				> Back
				</Button>
			</NavLink>
		</Grid>
	</Card>
}