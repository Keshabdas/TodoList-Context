import React from 'react'
import { List, ListItem, Checkbox, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

function TodoList({todos, removeTask}) {
    return (
        <List>
            {
                todos.map((todo, index) => (
                    <ListItem key={index.toString()} dense button>
                        <Checkbox tabIndex={-1} />
                        <ListItemText primary={todo.taskText} />
                        <ListItemSecondaryAction>
                            <IconButton aria-label='delete' onClick={() => removeTask(index)} >
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))
            }
        </List>
    )
}

export default TodoList;
