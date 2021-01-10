import React from 'react'
import { AppBar, Avatar, Box, Button, Menu, MenuItem, Toolbar, Typography, } from '@material-ui/core'
import { LogoIcon } from '../Logo';
import { NavLink } from './NavLink';
import { IAuthedUser, IUser, IUsers } from '../../services/declarations';
import { useDispatch, useSelector } from 'react-redux';
import { unsetAuthedUser } from '../../actions/authedUser';

interface DefaultRootState {
	users: IUsers
	authedUser: IAuthedUser
}
export const NavigationBar: React.FC = () => {
	const users = useSelector((state: DefaultRootState) => state.users)
	const authedUser = useSelector((state: DefaultRootState) => state.authedUser)
	const { avatarURL: avatar, name } = users[Object.keys(users).filter((el: any) => el === authedUser)[0]]

	return jsx(avatar, name)
}

const jsx = (avatar: string, name: string) => <AppBar position="static">
	<Toolbar>
		<LogoIcon />
		<Typography variant="h5">Quest Me</Typography>
		<NavLink />
		{<AvatarImage avatar={avatar} name={`${name} avatar`} />}
	</Toolbar>
</AppBar >

interface Props {
	avatar: string
	name: string
}

const AvatarImage: React.FC<Props> = ({ avatar, name }) => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const dispatch = useDispatch()
	const authedUser = useSelector((state: DefaultRootState) => state.authedUser)

	const logoutHandler = (event: { currentTarget: any }) => {
		if (authedUser !== null) {
			dispatch(unsetAuthedUser())
			return
		}
	}
	return (
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
				onClose={() => setAnchorEl(null)}
			>
				<MenuItem onClick={logoutHandler}>Logout</MenuItem>
			</Menu>
		</Box>
	)
}