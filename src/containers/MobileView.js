import React, { useContext } from 'react';
import { makeStyles, AppBar, Grid, Badge, withStyles } from '@material-ui/core';
import {GlobalContext} from "../context/Provider"
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


const StyledBadge = withStyles((theme) => ({
    badge: {
        background: 'green',
        color: 'white',
    }
}))(Badge);

function MobileView(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState('Incomplete');

    const { inCompleteList, completedList} = useContext(GlobalContext);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <AppBar position="fixed" className={classes.appBar}>
                <BottomNavigation value={value} showLabels onChange={handleChange} className={classes.root}>
                    <BottomNavigationAction label="Incomplete" value="Incomplete" icon={<Badge color="error" badgeContent={inCompleteList.length || 0}><RadioButtonUncheckedIcon /></Badge>} />
                    <BottomNavigationAction label="Complete" value="Complete" icon={<StyledBadge badgeContent={completedList.length || 0}><CheckCircleOutlineIcon /></StyledBadge>} />
                </BottomNavigation>
            </AppBar>
            <Grid container spacing={3} style={{ marginTop: 10, marginBottom: 40 }} >
                <Grid item xs={12}>  
                    {value === 'Incomplete' ? <IncompletedList {...props} /> : <CompletedList {...props} />}
                </Grid>
            </Grid>
        </>
    );
}

export default MobileView;
