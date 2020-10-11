import React, {useContext, useState, useEffect} from 'react'
import { ListItem, Tooltip, ListItemText, ListItemSecondaryAction, Paper, makeStyles,TextField } from '@material-ui/core';
import {GlobalContext} from "../context/Provider";
import TodoActions from "./TodoActions";

const styles = makeStyles({
    container: {
        marginBottom: "15px",
        "&:hover": {
            boxShadow: "0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)",
            cursor: "pointer"
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
    },
    secondaryAction: {
        right: 4,
    }
});


function TodoItem({todo}) {
    const { onCheckHandler } = useContext(GlobalContext); 
    const classes = styles();

    const [inputValue, setInputValue] = useState(todo.taskText);

    const changeHandler = (e) => {
        setInputValue(e.target.value);
    }

    const taskDate = todo.createdAt && new Date(todo.createdAt).toDateString();

   
    return (
        <Paper className={classes.container} elevation={3}>
            <ListItem  onDoubleClick={() => onCheckHandler(todo.id)}>
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
                <ListItemSecondaryAction classes={{ root: classes.secondaryAction }}>
                    <TodoActions todo={todo} inputValue={inputValue} />
                </ListItemSecondaryAction>
            </ListItem>
        </Paper>
    )
}

export default TodoItem;
