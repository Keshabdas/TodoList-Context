import React, { useContext } from 'react'
import {Typography, makeStyles, AppBar, IconButton, Tooltip} from '@material-ui/core'
import HideOnScroll from './HideOnScroll';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import { GlobalContext } from '../context/Provider';

const myStyle = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        background: theme.palette.type === 'dark' ? '#333' : null,
    },
    themeIcon: {
        flex: 1,
    },
    title: {
        fontWeight: "bold",
        margin: "15px 0px",
        flex: 40,
    }
}))

function Header(props) {
    const classes = myStyle();
    const {changeTheme, isDarkModeOn} = useContext(GlobalContext);

    const handleOnClick = () => {
        props.handleThemeChange();
        changeTheme();
    }

    return (
        <HideOnScroll {...props}>
            <AppBar className={classes.root} >
                <Typography variant="h4" align="center" className={classes.title}  >
                    {props.text}
                </Typography>
                {props.isMobile ? (
                    <Tooltip title="Toggle dark/light theme" aria-label="Toggle dark/light theme">
                        <IconButton className={classes.themeIcon} onClick={() => handleOnClick()}>
                            {isDarkModeOn ? (
                                <Brightness7Icon style={{ color: '#fff' }} />
                            ) : (
                                <Brightness4Icon style={{ color: '#fff' }} />
                            )}
                        </IconButton>
                    </Tooltip>
                ) : null}
            </AppBar>
        </HideOnScroll>
    )
}

export default Header;
