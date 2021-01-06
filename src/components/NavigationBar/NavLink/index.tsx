import { Box, Link } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from 'react-router-dom';

export const NavLink = () => {
	const useStyles = makeStyles({
		link: {
			color: "white",
			height: 48,
			padding: "0 30px"
		}
	});

	return (
		<>
			<Box ml={2}>
				<Link
					component={RouterLink}
					to="/"
					underline="none"
					className={useStyles().link}
				> Leaderboard  </Link >
			</Box>
			<Box ml={2}>
				<Link
					component={RouterLink}
					to="/questions"
					underline="none"
					className={useStyles().link}
				> Questions </Link >
			</Box>
			<Box ml={2}>
				<Link
					component="button"
					underline="none"
					className={useStyles().link}
				> Profile </Link >
			</Box>
		</>
	);
}