import React, {useContext, useState, useEffect} from 'react'
import { ListItem, Tooltip, ListItemText, ListItemSecondaryAction, Paper, makeStyles,TextField } from '@material-ui/core';
import {GlobalContext} from "../context/Provider";
import TodoActions from "./TodoActions";
import { SwipeableListItem } from '@sandstreamdev/react-swipeable-list';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Avatar from '@material-ui/core/Avatar';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';

const styles = makeStyles({
    container: {
        marginBottom: "15px",
        marginLeft: 5,
        marginRight: 5,
        "&:hover": {
            boxShadow: "0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)",
            cursor: "pointer"
        },
        "& .MuiListItem-container": {
            width: '100%',
        },
        "& .listItem": {
            border: '1px solid black',
            borderRadius: 4,
        }
    },
    complete: {
        color: "green",
        '& > span': {
            textDecoration: "line-through",
        }
    },
    incomplete: {
        color: "red",
        textDecoration: "none",
    },
    secondaryTxt: {
        fontSize: 12,
        marginTop: 8,
    },
    primaryTxt: {
        fontSize: '1.2rem',
        wordBreak: 'break-word',
    },
    secondaryAction: {
        right: 4,
    },
    secondaryActionMobile: {
        right: 2,
    }
});


function TodoItem({todo, isMobile}) {
    const { onCheckHandler, showDialog } = useContext(GlobalContext); 
    const classes = styles();

    const [inputValue, setInputValue] = useState(todo.taskText);

    const changeHandler = (e) => {
        setInputValue(e.target.value);
    }

    const taskDate = todo.createdAt && new Date(todo.createdAt).toDateString();

    const leftContent = (
        <ListItem>
            <ListItemIcon style={{ minWidth: 20, marginRight: 8 }}>
                <DoneIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Mark complete" />
        </ListItem>
    );

    const rightContent = (
        <ListItem>
            <ListItemText primary="Delete" style={{ textAlign: 'right' }} />
            <ListItemIcon style={{ justifyContent: 'flex-end', minWidth: 20, marginLeft: 8 }}>
                <DeleteIcon color="error" />
            </ListItemIcon>
        </ListItem>
    );
   
    return (
        <Paper className={classes.container} elevation={3}>
            <SwipeableListItem
                swipeLeft={{
                    content: rightContent,
                    action: () => showDialog(todo.id, 'Delete Task', 'Are you sure you want to delete this ?'),
                }}
                swipeRight={{
                    content: leftContent,
                    action: () => onCheckHandler(todo.id)
                }}
                // onSwipeProgress={progress => console.info(`Swipe progress: ${progress}%`)}
            >
                <ListItem  onDoubleClick={() => onCheckHandler(todo.id)} className="listItem">
                    {
                        todo.isEdit ? 
                        <TextField id="inputText" color="primary" value={inputValue} onChange={(e) => changeHandler(e)} fullWidth multiline />
                        :
                        <ListItemText 
                            multiline='true'
                            primary={todo.taskText}
                            secondary={taskDate || ''}
                            className={todo.isComplete ? classes.complete : classes.incomplete}
                            classes={{
                                primary: classes.primaryTxt,
                                secondary: classes.secondaryTxt
                            }}
                        />
                    }
                    <ListItemSecondaryAction classes={{ root: isMobile ? classes.secondaryActionMobile : classes.secondaryAction }}>
                        <TodoActions todo={todo} inputValue={inputValue} setInputValue={setInputValue} />
                    </ListItemSecondaryAction>
                </ListItem>
            </SwipeableListItem>
        </Paper>
    )
}

export default TodoItem;
