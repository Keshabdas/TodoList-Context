import React from 'react'
import {Typography, makeStyles} from '@material-ui/core'

const myStyle = makeStyles({
    root: {
        margin: "15px 0px",
        fontWeight: "bold"
    }
})

function Header({text}) {
    const classes = myStyle();
    return (
        <Typography variant="h4" align="center" className={classes.root} color="primary" >
          {text}
        </Typography>
    )
}

export default Header;
