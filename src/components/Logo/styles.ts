import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
	root: {
		fontSize: 50,
		backgroundColor: "white",
		height: 100,
		width: 100,
		marginRight: 10,
		clipPath: `circle(50%)`
	}
}));