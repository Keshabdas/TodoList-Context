import React from 'react';
import { Container } from '@material-ui/core';
import Provider from './context/Provider';
import Mainview from './containers/index'
import './App.css';

function App() {
  var isMobile = true || /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  
  return (
    <Provider>
      <Container maxWidth={"lg"} >
        <Mainview isMobile={isMobile} />
      </Container>
    </Provider>
  );
}

export default App;
