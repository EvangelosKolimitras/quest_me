import { makeStyles, Theme } from "@material-ui/core";
import { SportsRugbySharp } from "@material-ui/icons";

export const useStyles = makeStyles((theme: Theme) => ({
	menuPaper: {
		color: theme.palette.text.secondary
	},
	textName: {
		fontSize: ".75rem",
		color: theme.palette.text.primary,
		marginLeft: '.5rem'
	}
}))