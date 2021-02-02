import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
	root: {
		marginTop: 120
	},
	checkBox: {
		marginTop: 10,
	},
	chip: {
		margin: theme.spacing(0.5),
	},
	header: {
		margin: "2rem auto",
		textAlign: "center"
	},
	heading: {
		fontSize: "4rem",
		textAlign: "center"
	},
	button: {
		marginTop: "1.2rem",
		marginLeft: ".5rem",
		marginRight: ".5rem",
	},
	addIcon: {
		position: "fixed",
		bottom: "5%",
		right: "5%"
	},
	badge: {
		padding: 5,
		left: -15,
		top: -10
	}
}))