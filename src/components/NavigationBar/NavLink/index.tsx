import { Box, Grid, Link } from '@material-ui/core';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useStyles } from './styles';

const leaderboard = (link: string | undefined) => <Box ml={2}>
	<Link
		to="/leaderboard"
		component={RouterLink}
		underline="none"
		className={link}
	> Leaderboard</Link >
</Box>

const questions = (link: string | undefined) => <Box ml={2}>
	<Link
		to="/questions"
		component={RouterLink}
		underline="none"
		className={link}
	> Questions</Link >
</Box>

const jsx = (link: string | undefined) =>
	<Grid container justify="center">
		<Grid item>
			{leaderboard(link)}
		</Grid>
		<Grid item>
			{questions(link)}
		</Grid>
	</Grid>

export const NavLink: React.FC = () => jsx(useStyles().link)
