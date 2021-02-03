import { FC } from 'react'
import { AppBar, Toolbar, Typography, } from '@material-ui/core'
import { LogoIcon } from '../Logo';
import { NavLink } from './NavLink';
import { useSelector } from 'react-redux';
import { AvatarImage } from '../Avatar';
import { useStyles } from './styles';
import { AuthedUserPartialRootState, UsersPartialRootState } from '../../../common/types';

export const NavigationBar: FC = () => {
	const users = useSelector((state: UsersPartialRootState) => state.users!)
	const authedUser = useSelector((state: AuthedUserPartialRootState) => state.authedUser)
	const { avatarURL: avatar, name } = users[Object.keys(users).filter((el: any) => el === authedUser)[0]]
	const classes = useStyles()

	return <AppBar position="static">
		<AppBar position="fixed" className={classes.nav}>
			<Toolbar>
				<LogoIcon />
				<Typography variant="h5" className={classes.brand}>Quest Me</Typography>
				<NavLink />
				{<AvatarImage avatar={avatar} name={name} />}
			</Toolbar>
		</AppBar >
	</AppBar>
}


