import { makeStyles, Theme } from "@material-ui/core"
import { lightBlue } from "@material-ui/core/colors"

export const useStyles = makeStyles((theme: Theme) => ({
	card: {
		maxWidth: 445,
		height: 300,
		margin: "auto",
		marginBottom: 20,
		color: "white"
	},
	avatar: {
		backgroundColor: lightBlue[700]
	}
}))