import { Avatar, Box, Button, Menu, MenuItem } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { unsetAuthedUser } from "../../actions/authedUser";
import { IAuthedUser, IUsers } from "../../services/declarations";

interface DefaultRootState {
	users: IUsers
	authedUser: IAuthedUser
}

interface Props {
	avatar: string
	name: string
}

export const AvatarImage: React.FC<Props> = ({ avatar, name }) => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const dispatch = useDispatch()
	const authedUser = useSelector((state: DefaultRootState) => state.authedUser)

	const logoutHandler = (event: { currentTarget: any }) => {
		if (authedUser !== null) {
			dispatch(unsetAuthedUser())
			return
		}
	}
	return jsx({ avatar, name }, anchorEl, setAnchorEl, logoutHandler)
}

const jsx = ({ avatar, name }: Props, anchorEl: any, setAnchorEl: Function, logoutHandler: any) =>
	<Box ml={2}>
		<Button
			aria-controls="logout"
			aria-haspopup="true"
			onClick={(e) => setAnchorEl(e.currentTarget)}>
			<Avatar alt={name} src={avatar} />
		</Button>
		<Menu
			id="logout"
			anchorEl={anchorEl}
			keepMounted
			open={Boolean(anchorEl)}
			onClose={() => setAnchorEl(null)} >
			<MenuItem onClick={logoutHandler}>Logout</MenuItem>
		</Menu>
	</Box>