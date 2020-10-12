import React from 'react'
import Zoom from "@material-ui/core/Zoom";
import { makeStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";


const useStyles = makeStyles((theme) => ({
    desktop: {
        position: "fixed",
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    mob: {
        position: "fixed",
        top: 90,
        left: '45%',
    }
}));

function ScrollToTp(props) {
    const { children, window, isMobile } = props;
    const classes = useStyles();
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: isMobile ? 300 : 500
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            "#back-to-top-anchor"
        );

        if (anchor) {
            anchor.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    };

    return (
        <Zoom in={trigger}>
            <div onClick={handleClick} role="presentation" className={isMobile ? classes.mob : classes.desktop}>
                {children}
            </div>
        </Zoom>
    );
}

export default ScrollToTp;
