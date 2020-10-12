import React from 'react'
import {Typography, makeStyles, AppBar} from '@material-ui/core'

const myStyle = makeStyles({
    root: {
        
    },
    title: {
        fontWeight: "bold",
        margin: "15px 0px",
    }
})

function Header({text}) {
    const classes = myStyle();
    return (
        <AppBar className={classes.root} >
            <Typography variant="h4" align="center" className={classes.title}  >
                {text}
            </Typography>
        </AppBar>
    )
}

export default Header;
