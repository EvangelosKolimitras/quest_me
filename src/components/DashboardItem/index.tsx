import { Avatar, Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { CardHeader } from '@material-ui/core';
import { TableContainer } from '@material-ui/core';
import { Box, Card, CardContent } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux'
import { UsersPartialRootState } from '../../../common/types';
import { useStyles } from './styles';

interface Props { id: string }

export const DashboardItem = (props: Props) => {
	const users = useSelector((state: UsersPartialRootState) => state.users)
	const currentUser = users![props.id];
	const classes = useStyles();

	const user = {
		name: currentUser.name,
		avatar: currentUser.avatarURL,
		number_of_questions: Object.keys(currentUser.questions).length,
		number_of_answers: Object.keys(currentUser.answers).length,
	}

	const createData = (stats: string, total: number, answers: number, questions: number) =>
		({ stats, total, answers, questions })

	const total = calculate([user.number_of_answers, user.number_of_questions])

	const rows = [createData('Total', total, user.number_of_answers, user.number_of_questions)];
	return (
		<Box my={2}>
			<Card className={classes.card}>
				<CardHeader
					avatar={
						<Avatar aria-label="recipe" src={user.avatar}>
						</Avatar>
					}
					title={user.name}
				/>
				<CardContent >
					<TableContainer component={Paper}>
						<Table aria-label="simple table">
							<TableHead className={classes.card}>
								<TableRow>
									<TableCell className={classes.card}>Total</TableCell>
									<TableCell className={classes.card} align="right">Answers</TableCell>
									<TableCell className={classes.card} align="right">Questions</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{rows.map((row: any) => (
									<TableRow key={row.stats}>
										<TableCell className={classes.card} component="th" scope="row"> {total} </TableCell>
										<TableCell className={classes.card} align="right">{row.answers}</TableCell>
										<TableCell className={classes.card} align="right">{row.questions}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</CardContent>
			</Card>
		</Box>
	)
}

const calculate = (elements: number[]) => elements.reduce((acc: any, current: any) => acc + current, 0)
