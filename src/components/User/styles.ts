import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
	card: {
		margin: 10,
		width: 200,
		height: 275,
		float: "left",
		textAlign: "center",
		padding: 10
	},
	img: {
		width: "100%",
		height: 150,
		margin: "auto"
	},
	name: {
		marginTop: 20
	},
	btn: {
		marginTop: 20
	}
}))