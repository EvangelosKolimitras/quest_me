import { Box, Link } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles({
	link: {
		color: "white",
		height: 48,
		padding: "0 30px"
	}
});

const home = (link: string | undefined) => <Box ml={2}>
	<Link
		component={RouterLink}
		to="/"
		underline="none"
		className={link}
	> Leaderboard  </Link >
</Box>

const questions = (link: string | undefined) => <Box ml={2}>
	<Link
		component={RouterLink}
		to="/questions"
		underline="none"
		className={link}
	> Questions </Link >
</Box>

const profile = (link: string | undefined) => <Box ml={2}>
	<Link
		component="button"
		underline="none"
		className={link}
	> Profile </Link >
</Box>

const jsx = (link: string | undefined) =>
	<>
		{home(link)}
		{questions(link)}
		{profile(link)}
	</>

export const NavLink: React.FC = () => jsx(useStyles().link)
