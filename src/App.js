import React from 'react';
import { Grid, Container} from '@material-ui/core';
import TodoForm from './components/TodoForm';
import CompletedList from './components/CompletedList';
import IncompletedList from './components/IncompleteList';
import Provider from './context/Provider';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <Provider>
      <Container maxWidth={"lg"} >
        <Header text="Task Tracker" />
        <TodoForm  />
        <Grid container spacing={3} style={{ marginTop: 30 }} >
          <Grid item md={6} xs={12}>
            <IncompletedList />  
          </Grid>
          <Grid item md={6} xs={12}>
            <CompletedList />
          </Grid>
        </Grid>
      </Container>
    </Provider>
  );
}

export default App;