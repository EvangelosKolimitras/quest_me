import { Avatar, Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { CardHeader } from '@material-ui/core';
import { TableContainer } from '@material-ui/core';
import { Box, Card, CardContent } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux'
import { IAuthedUser, IUsers } from '../../services/declarations'

interface DefaultRootState { users?: IUsers, authedUser: IAuthedUser }
interface Props { id: string }
export function DashboardItem(props: Props): JSX.Element {
	const users = useSelector((state: DefaultRootState) => state.users)
	const currentUser = users![props.id];

	//const authedUser = useSelector((state: DefaultRootState) => state.authedUser)
	// const isAuthed = (authedUser as unknown as string) === currentUser.id

	const user = {
		name: currentUser.name,
		avatar: currentUser.avatarURL,
		number_of_questions: Object.keys(currentUser.questions).length,
		number_of_answers: Object.keys(currentUser.answers).length,
	}

	const total = calculate([user.number_of_answers, user.number_of_questions])

	function createData(stats: string, total: number, answers: number, questions: number) {
		return { stats, total, answers, questions };
	}

	const rows = [createData('Total', total, user.number_of_answers, user.number_of_questions),];

	return render(user, rows, total);
}


const calculate = (elements: number[]) => elements.reduce((acc: any, current: any) => acc + current, 0)

const render = (user: any, rows: any, total: React.ReactNode) => (
	<Box my={2}>
		<Card>
			<CardHeader
				avatar={
					<Avatar aria-label="recipe" src={user.avatar}>
					</Avatar>
				}
				title={user.name}
			/>
			<CardContent>
				<TableContainer component={Paper}>
					<Table aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell>Total</TableCell>
								<TableCell align="right">Answers</TableCell>
								<TableCell align="right">Questions</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map((row: any) => (
								<TableRow key={row.stats}>
									<TableCell component="th" scope="row"> {total} </TableCell>
									<TableCell align="right">{row.answers}</TableCell>
									<TableCell align="right">{row.questions}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</CardContent>
		</Card>
	</Box>
)