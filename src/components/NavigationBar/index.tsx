import React from 'react'
import { AppBar, Avatar, Box, Button, Toolbar, Typography, } from '@material-ui/core'
import { LogoIcon } from '../Logo';
import { NavLink } from './NavLink';
import { IAuthedUser, IUser, IUsers } from '../../services/declarations';
import { useSelector } from 'react-redux';

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
const AvatarImage: React.FC<Props> = ({ avatar, name }) => <Box ml={2}>
	<Button>
		<Avatar alt={name} src={avatar} />
	</Button>
</Box>