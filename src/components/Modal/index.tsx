import { Dialog, DialogTitle, DialogContent, DialogContentText, useMediaQuery, useTheme, Fab } from '@material-ui/core';
import React from 'react'
import { NewQuestion } from '../NewQuestion';
import AddIcon from '@material-ui/icons/Add';
import { useStyles } from './styles';

export const Modal: React.FC = () => {
	const [open, setOpen] = React.useState(false);
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

	const handleClickOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const classes = useStyles();

	return (
		<>
			<Fab onClick={handleClickOpen} className={classes.modalBtn} size="medium" aria-label="add">
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
