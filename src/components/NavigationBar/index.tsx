import React from 'react'
import { AppBar, Button, IconButton, Toolbar, Typography, } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

export const NavigationBar: React.FC = () => {
	return (
		<AppBar position="static">
			<Toolbar>
				<IconButton edge="start" color="inherit" aria-label="menu">
					<MenuIcon />
				</IconButton>
				<Typography variant="h6" >
					Quest Me
    	</Typography>
			</Toolbar>
		</AppBar>
	)
}