import React from 'react';
import { Grid } from '@material-ui/core';
import CompletedList from '../components/CompletedList';
import IncompletedList from '../components/IncompleteList';

function WebView(props) {
    return (
        <Grid container spacing={3} style={{ marginTop: 30 }} >
          <Grid item md={6} xs={12}>
            <IncompletedList {...props} />  
          </Grid>
          <Grid item md={6} xs={12}>
            <CompletedList {...props} />
          </Grid>
        </Grid>
    )
}

export default WebView;
