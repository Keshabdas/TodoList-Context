import React, { useState, useEffect, useContext } from 'react';
import TodoForm from '../components/TodoForm';
import Header from '../components/Header';
import WebView from './WebView';
import MobileView from './MobileView';
import ScrollTop from '../components/ScrollToTp'
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import CustomSnackbar from '../components/CustomSnackbar';
import CustomDialog from '../components/CustomDialog';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { GlobalContext } from '../context/Provider';

function Mainview(props) {
    const { isDarkModeOn } = useContext(GlobalContext);
    const [darkState, setDarkState] = useState(isDarkModeOn);

    const darkTheme = createMuiTheme({
      palette: {
        type: darkState ? "dark" : "light",
      }
    });

    const handleThemeChange = () => {
      setDarkState(!darkState);
    };

    useEffect(() => {
      document.body.classList.toggle('darkMode', darkState);
    }, [darkState]);

    return (
        <ThemeProvider theme={darkTheme}>
            <div id="back-to-top-anchor"></div>
            <Header text="Task Tracker" {...props} handleThemeChange={handleThemeChange} />
            <br />
            <TodoForm />
            {props.isMobile ? <MobileView isMobile={props.isMobile}  /> : <WebView isMobile={props.isMobile} />}
            <ScrollTop {...props}>
                <Fab color="primary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
            <CustomSnackbar />
            <CustomDialog />
        </ThemeProvider >
    )
}

export default Mainview;
