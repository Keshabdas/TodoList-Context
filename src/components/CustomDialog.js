import React, { useContext } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, DialogContentText, withStyles } from '@material-ui/core';
import { GlobalContext } from '../context/Provider';

const CustomDialog = () => {
    const {isDialogOpen, dialogTitle, dialogContent, hideDialog, todoSelected, deleteTodo} = useContext(GlobalContext)

    const handleConfirm = () => {
        deleteTodo(todoSelected);
        hideDialog();
    };

    return (
        <Dialog open={isDialogOpen}  onClose={() => hideDialog()} aria-labelledby="confirm-dialog">
            <DialogTitle>{dialogTitle}</DialogTitle>
            <DialogContent dividers>
                <DialogContentText>
                    {dialogContent}
                </DialogContentText>
            </DialogContent>
            <DialogActions >
                <Button variant="contained" color="primary" onClick={() => handleConfirm()}>Yes</Button>
                <Button variant="contained" color="secondary" onClick={() => hideDialog()}>No</Button>
            </DialogActions>
        </Dialog>
    )
}

export default CustomDialog;