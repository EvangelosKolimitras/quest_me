import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
	menuPaper: {
		color: theme.palette.text.primary,
		marginTop: "5rem",
		backgroundColor: theme.palette.background.default
	},
	textName: {
		fontSize: ".75rem",
		color: theme.palette.text.primary,
		marginLeft: '.5rem'
	}
}))