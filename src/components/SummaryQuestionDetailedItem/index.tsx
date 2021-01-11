import { Button, Card, makeStyles } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import { BarChar } from "../Char";
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';

interface PropsSummaryQuestionDetailedItem {
	question: any,
	vote: any
}

export const SummaryQuestionDetailedItem: React.FC<PropsSummaryQuestionDetailedItem> = ({ question, vote }) => {
	const q1Votes = question.optionOne.votes.length
	const q2Votes = question.optionTwo.votes.length;
	const totalAnswers = q1Votes + q2Votes;
	const percentages = {
		q1: q1Votes === 0 ? 0 : Math.round((q1Votes / totalAnswers) * 100),
		q2: q2Votes === 0 ? 0 : Math.round((q2Votes / totalAnswers) * 100)
	}

	const useStyles = makeStyles({
		card: {
			padding: 25,
			marginBottom: 25,
		},
	})
	const classes = useStyles();
	let data = [
		{ label: question.optionOne.text, value: q1Votes },
		{ label: question.optionTwo.text, value: q2Votes }
	];

	return <Card className={classes.card}>
		<BarChar data={data} percentages={percentages} />
		<Button
			variant="outlined"
			color="primary"
			size="large"
			startIcon={<ArrowBackIosRoundedIcon fontSize="inherit" />}
		>
			<NavLink to='/' exact className='btn btn-primary'> Back</NavLink>
		</Button>
	</Card>
}