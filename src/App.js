import React, { useState, useEffect, useContext } from 'react';
import { Container } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import theme from './theme'
import Provider from './context/Provider';
import { GlobalContext } from './context/Provider';
import Mainview from './containers/index'
import './App.css';

function App() {
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  let currentMode = parseInt(window.localStorage.getItem('darkMode'), 10);
  const { changeTheme } = useContext(GlobalContext);

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

  useEffect(() => {
    let CurrentDate = new Date();
    var currentTime = CurrentDate.getHours();
    if(!currentMode && (currentTime >= 21 || currentTime <= 6)) {
      setDarkState(!darkState);
      window.localStorage.setItem("darkMode",  1);
    }
  }, [])

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