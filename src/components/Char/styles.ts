import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
	chartTitle: {
		color: theme.palette.text.secondary
	},
	pieSeriesChart: {
		display: "block"
	},
	tooltip: {
		color: theme.palette.text.secondary,
	}
}))