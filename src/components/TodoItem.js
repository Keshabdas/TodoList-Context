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
        textDecoration: "line-through",
    },
    incomplete: {
        color: "red",
        textDecoration: "none",
    }
});


function TodoItem({todo}) {
    const { onCheckHandler } = useContext(GlobalContext); 
    const classes = styles();

    const [inputValue, setInputValue] = useState(todo.taskText);

    const changeHandler = (e) => {
        setInputValue(e.target.value);
    }
   
    return (
        <Paper className={classes.container} elevation={3}>
            <ListItem  onDoubleClick={() => onCheckHandler(todo.id)}>
                {/* <Checkbox tabIndex={-1} onChange={() => onCheckHandler(todo.id)} checked={todo.isComplete} color="primary" size="small" /> */}
                {
                    todo.isEdit ? 
                    <TextField id="inputText" color="primary" value={inputValue} onChange={(e) => changeHandler(e)} fullWidth multiline />
                    :
                    <ListItemText 
                        primary={todo.taskText} 
                        className={todo.isComplete ? classes.complete : classes.incomplete}
                    />
                }
                <ListItemSecondaryAction>
                    <TodoActions todo={todo} inputValue={inputValue} />
                </ListItemSecondaryAction>
            </ListItem>
        </Paper>
    )
}

export default TodoItem;
