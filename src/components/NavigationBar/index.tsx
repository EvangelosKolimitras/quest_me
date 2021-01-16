import React from 'react'
import { AppBar, Toolbar, Typography, } from '@material-ui/core'
import { LogoIcon } from '../Logo';
import { NavLink } from './NavLink';
import { IAuthedUser, IUsers } from '../../services/declarations';
import { useSelector } from 'react-redux';
import { AvatarImage } from '../Avatar';
import { useStyles } from './styles';

interface DefaultRootState {
	users: IUsers
	authedUser: IAuthedUser
}

export const NavigationBar: React.FC = () => {
	const users = useSelector((state: DefaultRootState) => state.users)
	const authedUser = useSelector((state: DefaultRootState) => state.authedUser)
	const { avatarURL: avatar, name } = users[Object.keys(users).filter((el: any) => el === authedUser)[0]]
	const classes = useStyles()

	return <AppBar position="static">
		<AppBar position="fixed" className={classes.nav}>
			<Toolbar>
				<LogoIcon />
				<Typography variant="h5">Quest Me</Typography>
				<NavLink />
				{<AvatarImage avatar={avatar} name={`${name} avatar`} />}
			</Toolbar>
		</AppBar >
	</AppBar>
}


