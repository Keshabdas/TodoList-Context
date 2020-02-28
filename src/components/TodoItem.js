import React, {useContext, useState} from 'react'
import { ListItem, Checkbox, ListItemText, ListItemSecondaryAction, IconButton, Paper, makeStyles,TextField } from '@material-ui/core';
import {GlobalContext} from "../context/Provider";
import TodoActions from "./TodoActions";

const styles = makeStyles({
    container: {
        marginBottom: "15px",
    },
    complete: {
        color: "green",
        textDecoration: "line-through",
    },
    incomplete: {
        color: "red",
        textDecoration: "none",
    }
})


function TodoItem({todo, index}) {
    const { onCheckHandler } = useContext(GlobalContext); 
    const classes = styles();

    const [inputValue, setInputValue] = useState(todo.taskText);

    return (
        <Paper className={classes.container} >
            <ListItem key={index.toString()} button>
                <Checkbox tabIndex={-1} onChange={() => onCheckHandler(todo.id)} checked={todo.isComplete}/>
                {
                    todo.isEdit ? 
                    <TextField id="" label="" color="secondary" value={inputValue} onChange={(e) => setInputValue(e.target.value)} fullWidth /> :
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
