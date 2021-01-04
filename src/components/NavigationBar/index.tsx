import React from 'react'
import { AppBar, Toolbar, Typography, } from '@material-ui/core'
import { LogoIcon } from '../Logo';

export const NavigationBar: React.FC = () => {
	return (
		<AppBar position="static">
			<Toolbar>
				<LogoIcon />
				<Typography variant="h5" >
					Quest Me
    	</Typography>
			</Toolbar>
		</AppBar>
	)
}