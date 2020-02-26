import React, {useState, useEffect, useContext} from 'react';
import {Divider, Grid, Container} from '@material-ui/core'
import TodoForm from './components/TodoForm';
import CompletedList from './components/CompletedList';
import IncompletedList from './components/IncompleteList';
import Provider from './context/Provider';
import Header from './components/Header';


function App() {

  return (
    <Provider>
      <Container maxWidth={"sm"}>
        <Header />
        <TodoForm  />
        <Divider style={{margin: "30px 0px"}}/>
        <Grid container spacing={3}>
          <Grid item  xs={12} >
            <IncompletedList />  
          </Grid>
          <Grid item  xs={12}>
            <CompletedList />
          </Grid>
        </Grid>
      </Container>
    </Provider>
  );
}

export default App;