import React, { useContext } from 'react'
import MuiAlert from '@material-ui/lab/Alert';
import { Snackbar } from '@material-ui/core';
import { GlobalContext } from '../context/Provider';

function CustomSnackbar() {

    const {showSnackbar, alertSeverity, alertMessage, closeSnackbar, isDarkModeOn } = useContext(GlobalContext);

    const Alert = (props) => {
        return <MuiAlert elevation={6} variant={isDarkModeOn ? "standard" : "filled"} {...props} />;
    }

    return (
        <div>
            <Snackbar open={showSnackbar} autoHideDuration={4000} onClose={closeSnackbar} anchorOrigin={{vertical: 'top', horizontal: 'center',}} >
                <Alert onClose={closeSnackbar} severity={alertSeverity || 'info'}>{alertMessage}</Alert>
            </Snackbar>
        </div>
    )
}

export default CustomSnackbar;
