import React from 'react'
import { AppBar, Toolbar, Typography, } from '@material-ui/core'
import { LogoIcon } from '../Logo';
import { NavLink } from './NavLink';

export const NavigationBar: React.FC = () => {
	return (
		<AppBar position="static">
			<Toolbar>
				<LogoIcon />
				<Typography variant="h5" > Quest Me </Typography>
				<NavLink />
			</Toolbar>
		</AppBar>
	)
}