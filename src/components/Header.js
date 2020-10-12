import React from 'react'
import {Typography, makeStyles, AppBar} from '@material-ui/core'
import HideOnScroll from './HideOnScroll';

const myStyle = makeStyles({
    root: {
        
    },
    title: {
        fontWeight: "bold",
        margin: "15px 0px",
    }
})

function Header(props) {
    const classes = myStyle();
    return (
        <HideOnScroll {...props}>
            <AppBar className={classes.root} >
                <Typography variant="h4" align="center" className={classes.title}  >
                    {props.text}
                </Typography>
            </AppBar>
        </HideOnScroll>
    )
}

export default Header;
