import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
	modalBtn: {
		position: "fixed",
		bottom: "5%",
		right: "5%",
		backgroundColor: theme.palette.background.default,
		color: theme.palette.text.primary
	},
	dialogTitle: {
		color: theme.palette.text.secondary
	}
}))