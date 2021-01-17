import { makeStyles, Theme } from "@material-ui/core"

export const useStyles = makeStyles((theme: Theme) => ({
	card: {
		maxWidth: 445,
		height: 300,
		margin: "auto",
		marginBottom: 20,
		color: "white",
		paddingBottom: 10
	},
	header: {
		backgroundColor: theme.palette.background.default
	},
	cardContentTitle: {
		color: theme.palette.text.secondary
	},
	marg: {
		margin: 2
	},
	cardSettings: {
		fontSize: 10,
		color: theme.palette.text.primary
	},
	check: {
		color: theme.palette.success.main
	}
}))