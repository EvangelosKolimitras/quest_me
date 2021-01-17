import { makeStyles, Theme } from "@material-ui/core";


export const useStyles = makeStyles((theme: Theme) => ({
	nav: {
		backgroundColor: theme.palette.background.default
	},
	brand: {
		color: theme.palette.text.primary,
		width: 140
	}
}))