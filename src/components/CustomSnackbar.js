import React, { useContext } from 'react'
import MuiAlert from '@material-ui/lab/Alert';
import { Snackbar } from '@material-ui/core';
import { GlobalContext } from '../context/Provider';

function CustomSnackbar() {

    const {showSnackbar, alertSeverity, alertMessage, closeSnackbar } = useContext(GlobalContext);

    const Alert = (props) => {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    return (
        <div>
            <Snackbar open={showSnackbar} autoHideDuration={4000} onClose={closeSnackbar} >
                <Alert onClose={closeSnackbar} severity={alertSeverity || 'info'}>{alertMessage}</Alert>
            </Snackbar>
        </div>
    )
}

export default CustomSnackbar;
