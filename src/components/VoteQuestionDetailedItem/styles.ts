import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
	btn: {
		marginTop: 25,
		width: "50%",
		fontSize: 20,
		backgroundColor: theme.palette.background.default
	},
	radios: {
		display: "block",
		margin: "auto",
		padding: 25,
		color: "black",
		borderRadius: 10
	},
	radioOption01: {
		color: "#42A5F5"
	},
	radioOption02: {
		color: "#FF7043"
	}
}))