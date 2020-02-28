import React, { useContext } from 'react';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditSharpIcon from '@material-ui/icons/EditSharp';
import DoneIcon from '@material-ui/icons/Done';
import {GlobalContext} from "../context/Provider";

const TodoActions = ({todo, inputValue}) => {
    const {deleteTodo, editHandler, editDone} = useContext(GlobalContext); 

    return (
        <>
            {
                todo.isComplete ? 
                <>
                    <IconButton aria-label='delete' onClick={() => deleteTodo(todo.id)} >
                        <DeleteIcon />
                    </IconButton>
                </> 
                :
                <>
                    {
                        todo.isEdit ? 
                        <IconButton aria-label='delete' onClick={() => editDone(todo.id, inputValue)} >
                            <DoneIcon />
                        </IconButton>
                        :
                        <>
                            <IconButton aria-label='delete' onClick={() => editHandler(todo.id)} >
                                <EditSharpIcon />
                            </IconButton>
                            <IconButton aria-label='delete' onClick={() => deleteTodo(todo.id)} >
                                <DeleteIcon />
                            </IconButton>
                        </>
                    }
                   
                </> 
            }
        </>
    )
} 

export default TodoActions;



