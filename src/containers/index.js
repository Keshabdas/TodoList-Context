import React from 'react';
import TodoForm from '../components/TodoForm';
import Header from '../components/Header';
import WebView from './WebView';
import MobileView from './MobileView';
import ScrollTop from '../components/ScrollToTp'
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import CustomSnackbar from '../components/CustomSnackbar';
import CustomDialog from '../components/CustomDialog';

function Mainview(props) {
    return (
        <div>
            <div id="back-to-top-anchor"></div>
            <Header text="Task Tracker" {...props} />
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
        </div>
    )
}

export default Mainview;
