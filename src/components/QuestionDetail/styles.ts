import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
	root: {
		marginTop: 120
	},
	card: {
		marginTop: 50,
		margin: "auto",
		width: "75%",
		maxWidth: 900,
	}
}))