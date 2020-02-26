import React from 'react'
import {Typography, makeStyles} from '@material-ui/core'

const myStyle = makeStyles({
    root: {
        margin: "15px 0px",
        fontWeight: "bold"
    }
})

function Header() {
    const classes = myStyle();
    return (
        <Typography variant="h4" align="center" className={classes.root} color="primary" >
          To Do List
        </Typography>
    )
}

export default Header
