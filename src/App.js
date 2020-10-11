import React from 'react';
import { Container } from '@material-ui/core';
import TodoForm from './components/TodoForm';
import Header from './components/Header';
import WebView from './containers/WebView';
import Provider from './context/Provider';
import './App.css';
import MobileView from './containers/MobileView';

function App() {
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  
  return (
    <Provider>
      <Container maxWidth={"lg"} >
        <Header text="Task Tracker" />
        <TodoForm />
        {isMobile ? <MobileView isMobile={isMobile} /> : <WebView />}
      </Container>
    </Provider>
  );
}

export default App;