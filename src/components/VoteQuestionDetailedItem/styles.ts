import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
	btn: {
		marginTop: 25,
		width: "50%",
		fontSize: 20,
		backgroundColor: theme.palette.primary.main
	},
	radios: {
		display: "block",
		margin: "auto",
		padding: 25,
		color: "black",
		borderRadius: 10
	}
}))