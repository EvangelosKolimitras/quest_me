import { makeStyles, Theme } from "@material-ui/core"

export const useStyles = makeStyles((theme: Theme) => ({
	card: {
		maxWidth: 445,
		height: 300,
		margin: "auto",
		marginBottom: 20,
		paddingBottom: 10,
		color: theme.palette.text.secondary,
	},
	header: {
		backgroundColor: theme.palette.background.paper
	},
	cardContentTitle: {
		color: "inherit"
	},
	cardSettings: {
		fontSize: 10,
	},
	check: {
		color: theme.palette.success.main
	}
}))