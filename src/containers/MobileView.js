import React from 'react';
import { makeStyles, AppBar, Grid } from '@material-ui/core';
import CompletedList from '../components/CompletedList';
import IncompletedList from '../components/IncompleteList';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

const useStyles = makeStyles({
    root: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        background: '#f3f3f3',
    },
    appBar: {
        top: "auto",
        bottom: 0,
    },
});

function MobileView(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState('Incomplete');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <AppBar position="fixed" className={classes.appBar}>
                <BottomNavigation value={value} showLabels onChange={handleChange} className={classes.root}>
                    <BottomNavigationAction label="Incomplete" value="Incomplete" icon={<RadioButtonUncheckedIcon />} />
                    <BottomNavigationAction label="Complete" value="Complete" icon={<CheckCircleOutlineIcon />} />
                </BottomNavigation>
            </AppBar>
            <Grid container spacing={3} style={{ marginTop: 30, marginBottom: 40 }} >
                <Grid item xs={12}>  
                    {value === 'Incomplete' ? <IncompletedList {...props} /> : <CompletedList {...props} />}
                </Grid>
            </Grid>
        </>
    );
}

export default MobileView;
