import React from 'react';
import { Container } from '@material-ui/core';
import Provider from './context/Provider';
import Mainview from './containers/index'
import './App.css';

function App() {
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  return (
    <Provider>
      <div>
        <Container maxWidth={"lg"} >
          <Mainview isMobile={isMobile} />
        </Container>
      </div>
    </Provider>
  );
}

export default App;