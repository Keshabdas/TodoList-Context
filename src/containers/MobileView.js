import React, { useContext } from 'react';
import { makeStyles, AppBar, Grid, Badge, withStyles } from '@material-ui/core';
import {GlobalContext} from "../context/Provider"
import CompletedList from '../components/CompletedList';
import IncompletedList from '../components/IncompleteList';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        background: theme.palette.type === 'dark' ? null : '#f3f3f3',
        '& .MuiBottomNavigationAction-root': {
            maxWidth: 'inherit',
        },
        '& .MuiBottomNavigationAction-root.Mui-selected': {
            color: theme.palette.type === 'dark' ? '#90caf9' : null,
            fontWeight: 600,
            // background: theme.palette.type === 'dark' ? '#000' : null,
        }
    },
    selectedRoot: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        background: theme.palette.type === 'dark' ? null : '#f3f3f3',
        '& .MuiBottomNavigationAction-root': {
            maxWidth: 'inherit',
        },
        '& .MuiBottomNavigationAction-label': {
            fontWeight: 600,
            fontSize: '1rem',
        },
        '& .MuiBottomNavigationAction-root.MuiBottomNavigationAction-iconOnly': {
            paddingTop: 6,
        },
    },
    appBar: {
        top: "auto",
        bottom: 0,
    },
}));


const StyledBadge = withStyles((theme) => ({
    badge: {
        background: 'green',
        color: 'white',
    }
}))(Badge);

function MobileView(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState('Incomplete');

    const { inCompleteList, completedList, isMultiSelectOn, deleteAllSelected, completeAllSelected, selectedTodos } = useContext(GlobalContext);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeOnMultiSelectMode = (event, newValue) => {
        if (newValue === 'Delete') {
            deleteAllSelected();
        }
        if (newValue === 'Mark_complete') {
            completeAllSelected();
        }
    }

    return (
        <>
            <AppBar position="fixed" className={classes.appBar}>
                {isMultiSelectOn || selectedTodos.length > 0 ? (
                    <BottomNavigation showLabels onChange={handleChangeOnMultiSelectMode} className={classes.selectedRoot}>
                        <BottomNavigationAction value="Delete" label="Delete" icon={<Badge color="error" badgeContent={selectedTodos.length}><DeleteIcon color="error" /></Badge>} />
                        {value === 'Incomplete' ? <BottomNavigationAction label="Complete" value="Mark_complete" icon={<StyledBadge badgeContent={selectedTodos.length}><AssignmentTurnedInIcon color='primary' /></StyledBadge>} /> : null}
                    </BottomNavigation>
                ) : (
                    <BottomNavigation value={value} showLabels onChange={handleChange} className={classes.root}>
                        <BottomNavigationAction label="Incomplete" value="Incomplete" icon={<Badge color="error" badgeContent={inCompleteList.length || 0}><RadioButtonUncheckedIcon /></Badge>} />
                        <BottomNavigationAction label="Complete" value="Complete" icon={<StyledBadge badgeContent={completedList.length || 0}><CheckCircleOutlineIcon /></StyledBadge>} />
                    </BottomNavigation>
                )}
            </AppBar>
            <Grid container spacing={3} style={{ marginTop: 10, marginBottom: 60 }} >
                <Grid item xs={12}>  
                    {value === 'Incomplete' ? <IncompletedList {...props} /> : <CompletedList {...props} />}
                </Grid>
            </Grid>
        </>
    );
}

export default MobileView;
