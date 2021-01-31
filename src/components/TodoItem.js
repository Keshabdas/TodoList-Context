import React, {useContext, useState} from 'react'
import { ListItem, ListItemText, ListItemSecondaryAction, Paper, makeStyles,TextField, IconButton } from '@material-ui/core';
import {GlobalContext} from "../context/Provider";
import TodoActions from "./TodoActions";
import { SwipeableListItem } from '@sandstreamdev/react-swipeable-list';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import DoneIcon from '@material-ui/icons/Done';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

const styles = makeStyles((theme) => ({
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
            backgroundColor: theme.palette.type === 'dark' ?  '#424242' : null,
            paddingLeft: props => props.isMobile ? 10 : null,
            paddingTop: props => props.isMobile ? 5 : null,
            paddingBottom: props => props.isMobile ? 5 : null,
            "& .MuiListItemText-multiline": {
                marginTop: props => props.isMobile ? 0 : null,
                marginBottom: props => props.isMobile ? 0 : null,
            }
        }
    },
    complete: {
        color: theme.palette.type === 'dark' ? null : "green",
        '& > span': {
            textDecoration: "line-through",
        }
    },
    incomplete: {
        color: theme.palette.type === 'dark' ? null : "red",
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
}));


function TodoItem({todo, isMobile, completedList}) {
    const { onCheckHandler, showDialog, deleteTodo, isMultiSelectOn, selectedTodos, removeItemFromSelectedTodos, addItemFromSelectedTodos } = useContext(GlobalContext); 
    const classes = styles({isMobile});

    const [inputValue, setInputValue] = useState(todo.taskText);

    const changeHandler = (e) => {
        setInputValue(e.target.value);
    }

    const taskDate = (todo.createdAt && new Date(todo.createdAt).toDateString()) || '';
    const taskCompletedDate = (todo.completedOn && new Date(todo.completedOn).toDateString()) || taskDate;

    const leftContent = (
        <ListItem style={{ background: 'green', height: '100%', color: '#fff' }}>
            <ListItemIcon style={{ minWidth: 20, marginRight: 8 }}>
                <DoneIcon style={{ color: '#fff' }} />
            </ListItemIcon>
            <ListItemText primary={completedList ? "Mark Incomplete" : "Mark Complete"} />
        </ListItem>
    );

    const rightContent = (
        <ListItem style={{ background: 'red', height: '100%', color: '#fff' }}>
            <ListItemText primary="Delete" style={{ textAlign: 'right' }} />
            <ListItemIcon style={{ justifyContent: 'flex-end', minWidth: 20, marginLeft: 8 }}>
                <DeleteOutlineIcon style={{ color: '#fff' }} />
            </ListItemIcon>
        </ListItem>
    );

    const multiSelectModeActionIcons = (id) => {
        if(selectedTodos.includes(id)) {
            return (<IconButton onClick={() => removeItemFromSelectedTodos(id)}>
                <CheckCircleIcon color="secondary" />
            </IconButton>);
        } else {
            return (<IconButton onClick={() => addItemFromSelectedTodos(id)}>
                <RadioButtonUncheckedIcon />
            </IconButton>);
        }
    } 
   
    return (
        <Paper className={classes.container} elevation={3}>
            <SwipeableListItem
                swipeLeft={todo.isEdit ? null : {
                    content: rightContent,
                    action: () => completedList ? deleteTodo(todo.id) : showDialog(todo.id, 'Delete Task', 'Are you sure you want to delete this ?'),
                }}
                swipeRight={todo.isEdit ? null : {
                    content: leftContent,
                    action: () => onCheckHandler(todo.id)
                }}
            >
                <ListItem  onDoubleClick={() => todo.isEdit && !isMobile ? null : onCheckHandler(todo.id)} className="listItem">
                    {
                        todo.isEdit ? 
                        <TextField id="inputText" color="primary" value={inputValue} onChange={(e) => changeHandler(e)} fullWidth multiline />
                        :
                        <ListItemText 
                            multiline='true'
                            primary={todo.taskText}
                            secondary={completedList ? `Completed on: ${taskCompletedDate}` : `Created on: ${taskDate}`}
                            className={todo.isComplete ? classes.complete : classes.incomplete}
                            classes={{
                                primary: classes.primaryTxt,
                                secondary: classes.secondaryTxt
                            }}
                        />
                    }
                    <ListItemSecondaryAction classes={{ root: isMobile ? classes.secondaryActionMobile : classes.secondaryAction }}>
                        {isMultiSelectOn ? multiSelectModeActionIcons(todo.id) : <TodoActions todo={todo} inputValue={inputValue} setInputValue={setInputValue} />}
                    </ListItemSecondaryAction>
                </ListItem>
            </SwipeableListItem>
        </Paper>
    )
}

export default TodoItem;
