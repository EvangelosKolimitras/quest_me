import { Avatar, Box, Button, Menu, MenuItem, Typography } from "@material-ui/core";
import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthedUserPartialRootState } from "../../../common/types";
import { unsetAuthedUser } from "../../actions/authedUser";
import { formatName } from "../../utils";
import { useStyles } from "./styles";

interface Props {
	avatar: string
	name: string
}

export const AvatarImage: FC<Props> = ({ avatar, name }) => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const dispatch = useDispatch()
	const authedUser = useSelector((state: AuthedUserPartialRootState) => state.authedUser)
	const classes = useStyles()

	const logoutHandler = () => {
		if (authedUser !== null) {
			dispatch(unsetAuthedUser())
			return
		}
	}
	return <Box
		ml={2}>
		<Button
			aria-controls="logout"
			aria-haspopup="true"
			onClick={(event) => setAnchorEl(event.currentTarget)}>
			<Typography variant="body2" className={classes.textName} >
				{formatName(name)}
			</Typography>
			<Avatar alt={name} src={avatar} />
		</Button>
		<Menu
			id="logout"
			anchorEl={anchorEl}
			keepMounted
			open={Boolean(anchorEl)}
			onClose={() => setAnchorEl(null)}
			classes={{ paper: classes.menuPaper }}
		>
			<MenuItem onClick={logoutHandler}>Logout</MenuItem>
		</Menu>
	</Box >
}
