import { Avatar, Box, Button, Menu, MenuItem, Typography } from "@material-ui/core";
import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { unsetAuthedUser } from "../../actions/authedUser";
import { IAuthedUser, IUsers } from "../../services/declarations";
import { formatName } from "../../utils";
import { useStyles } from "./styles";

interface DefaultRootState {
	users: IUsers
	authedUser: IAuthedUser
}

interface Props {
	avatar: string
	name: string
}

export const AvatarImage: FC<Props> = ({ avatar, name }) => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const dispatch = useDispatch()
	const authedUser = useSelector((state: DefaultRootState) => state.authedUser)
	const classes = useStyles()

	const logoutHandler = (event: { currentTarget: any }) => {
		if (authedUser !== null) {
			dispatch(unsetAuthedUser())
			return
		}
	}
	return jsx(classes, { avatar, name }, anchorEl, setAnchorEl, logoutHandler)
}

const jsx = (classes: any, { avatar, name }: Props, anchorEl: any, setAnchorEl: Function, logoutHandler: any) =>
	<Box
		ml={2}>
		<Button
			aria-controls="logout"
			aria-haspopup="true"
			onClick={(event) => setAnchorEl(event.currentTarget)}>
			<Avatar alt={name} src={avatar} />
			<Typography variant="body2" className={classes.textName} >
				{formatName(name)}
			</Typography>
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