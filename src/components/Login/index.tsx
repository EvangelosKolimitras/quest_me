import { CardContent } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { Card } from '@material-ui/core'
import React from 'react'
import { User } from '../User'

export const Login: React.FC = () => jsx()

const jsx = () => (
	<Card>
		<CardContent>
			<Typography variant="h3">
				Login
        </Typography>
			<div >
				<Typography variant="h4">In order to use this application you must be authenticated.</Typography>
				<p>Please pick up a user to login</p>
			</div>
			<div className="card-group">
				<User id={"jane_smith"} />
			</div>
		</CardContent>
	</Card>
)