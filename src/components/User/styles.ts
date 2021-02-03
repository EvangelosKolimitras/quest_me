import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
	card: {
		margin: 10,
		width: 200,
		height: 275,
		float: "left",
		textAlign: "center",
		padding: 10,
		backgroundColor: "#242424"
	},
	img: {
		width: "100%",
		height: 150,
		margin: "auto",
		borderRadius: ".5em"
	},
	name: {
		marginTop: 20,
		color: theme.palette.text.primary
	},
	btn: {
		marginTop: 20,
	}
}))