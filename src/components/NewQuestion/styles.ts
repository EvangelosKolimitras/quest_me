import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
	container: {
		marginTop: 10,
		width: "90%",
		maxWidth: 1000,
		padding: 10,
		height: "90vh",
	},
	card: {
		height: 400
	},
	btn: {
		marginTop: 25,
		marginBottom: 25,
		width: "100%"
	},
	input: {
		color: theme.palette.text.secondary
	}
}))