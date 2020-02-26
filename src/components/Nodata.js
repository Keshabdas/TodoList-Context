import React from 'react';
import { Typography } from '@material-ui/core';

function Nodata({text}) {
    return (
        <>
            <Typography variant="h6" align="center">
                {text}
            </Typography>
        </>
    )
}

export default Nodata;
