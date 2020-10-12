import React from 'react';
import TodoForm from '../components/TodoForm';
import Header from '../components/Header';
import WebView from './WebView';
import MobileView from './MobileView';
import ScrollTop from '../components/ScrollToTp'
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

function Mainview(props) {
    return (
        <>
            <div id="back-to-top-anchor"></div>
            <Header text="Task Tracker" />
            <TodoForm />
            {props.isMobile ? <MobileView isMobile={props.isMobile} /> : <WebView />}
            <ScrollTop {...props}>
                <Fab color="primary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </>
    )
}

export default Mainview;
