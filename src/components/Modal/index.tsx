import { Dialog, DialogTitle, DialogContent, DialogContentText, useMediaQuery, useTheme, Fab, makeStyles } from '@material-ui/core';
import React from 'react'
import { NewQuestion } from '../NewQuestion';
import AddIcon from '@material-ui/icons/Add';

export const Modal: React.FC = () => {
	const [open, setOpen] = React.useState(false);
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

	const handleClickOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const useStyles = makeStyles({
		modal: {
			position: "fixed",
			bottom: "5%",
			right: "5%"
		}
	})

	const classes = useStyles();

	return (
		<>
			<Fab onClick={handleClickOpen} className={classes.modal} size="medium" color="primary" aria-label="add">
				<AddIcon />
			</Fab>
			<Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
				<DialogTitle id="form-dialog-title">New Poll</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Please enter your options below
          </DialogContentText>
					<NewQuestion closeModalOnSubmit={() => handleClose()} />
				</DialogContent>
			</Dialog>
		</>
	);
}
