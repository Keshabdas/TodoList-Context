import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    main: {
        display: 'grid',
        placeItems: 'center',
        height: '50vh',
    },
    text: {
        color: '#777'
    }
})

function Nodata({primaryText, secondaryText}) {
    const classes = useStyles();

    return (
        <div className={classes.main}>
            <Typography variant="h5" className={classes.text}>
                {primaryText}
                <br/>
                {secondaryText}
            </Typography>
        </div>
    )
}

export default Nodata;
