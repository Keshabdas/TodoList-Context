import React, {useContext, useState} from 'react'
import { ListItem, Checkbox, ListItemText, ListItemSecondaryAction, IconButton, Paper, makeStyles,TextField } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditSharpIcon from '@material-ui/icons/EditSharp';
import DoneIcon from '@material-ui/icons/Done';
import {GlobalContext} from "../context/Provider";

const com = makeStyles({
    complete: {
        color: "green",
        textDecoration: "line-through",
    },
})
const incom = makeStyles({
    incomplete: {
        color: "red",
        textDecoration: "none",
    }
})


function TodoItem({todo, index}) {
    const {deleteTodo, onCheckHandler, editHandler, editDone} = useContext(GlobalContext); 
    const red = com();
    const green = incom();

    const [inputValue, setInputValue] = useState(todo.taskText);

    return (
        <Paper style={{marginBottom: "15px"}}>
            <ListItem key={index.toString()} dense button>
                <Checkbox tabIndex={-1} onChange={() => onCheckHandler(todo.id)} checked={todo.isComplete}/>
                {
                    todo.isEdit ? 
                    <TextField id="" label="" color="secondary" value={inputValue} onChange={(e) => setInputValue(e.target.value)} /> :
                    <ListItemText 
                        primary={todo.taskText} 
                        className={todo.isComplete ? red.complete : green.incomplete}
                    />
                }
                <ListItemSecondaryAction>
                    {
                        todo.isEdit ? 
                        <IconButton aria-label='delete' onClick={() => editDone(todo.id, inputValue)} >
                            <DoneIcon />
                        </IconButton>
                        :
                        <IconButton aria-label='delete' onClick={() => editHandler(todo.id)} >
                            <EditSharpIcon />
                        </IconButton>
                    }
                    <IconButton aria-label='delete' onClick={() => deleteTodo(todo.id)} >
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </Paper>
    )
}

export default TodoItem;
