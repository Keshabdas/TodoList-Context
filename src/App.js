import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import theme from './theme'
import Provider from './context/Provider';
import Mainview from './containers/index'
import './App.css';

function App() {
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  let currentMode = parseInt(window.localStorage.getItem('darkMode'), 10);
  const [darkState, setDarkState] = useState(currentMode);
  const palletType = darkState ? "dark" : "light";
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
    }
  });

  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  useEffect(() => {
    document.body.classList.toggle('darkMode', darkState);
  }, [darkState])

  return (
    <ThemeProvider theme={darkTheme}>
      <Provider>
        <div>
          <Container maxWidth={"lg"} >
            <Mainview isMobile={isMobile} handleThemeChange={handleThemeChange} />
          </Container>
        </div>
      </Provider>
    </ThemeProvider>
  );
}

export default App;