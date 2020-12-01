import React, { useContext } from 'react';
import { IconButton, Menu, MenuItem, Tooltip } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditSharpIcon from '@material-ui/icons/EditSharp';
import DoneIcon from '@material-ui/icons/Done';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {GlobalContext} from "../context/Provider";

const TodoActions = ({todo, inputValue}) => {
    const {deleteTodo, editHandler, editDone, showDialog} = useContext(GlobalContext); 

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <>
            {/* {
                todo.isComplete ? 
                <>
                    <IconButton aria-label='delete' onClick={() => deleteTodo(todo.id)} color="secondary">
                        <DeleteIcon />
                    </IconButton>
                </> 
                :
                <>
                    {
                        todo.isEdit ? 
                        <IconButton aria-label='delete' onClick={() => editDone(todo.id, inputValue, todo.taskText)} color="primary">
                            <DoneIcon />
                        </IconButton>
                        :
                        <>
                            <IconButton aria-label='delete' onClick={() => editHandler(todo.id)} color="primary">
                                <EditSharpIcon />
                            </IconButton>
                            <IconButton aria-label='delete' onClick={() => deleteTodo(todo.id)} color="secondary">
                                <DeleteIcon />
                            </IconButton>
                        </>
                    }
                   
                </> 
            } */}
            {
                todo.isEdit ? 
                <IconButton aria-label='delete' onClick={() => editDone(todo.id, inputValue, todo.taskText)} color="primary">
                    <DoneIcon />
                </IconButton> 
                :
                <Tooltip title="options">
                    <IconButton
                        aria-label="more"
                        aria-controls="long-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                        <MoreVertIcon />
                    </IconButton>
                </Tooltip>
            }
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {
                    todo.isComplete ? 
                    <MenuItem onClick={handleClose}>
                        <IconButton aria-label='delete' onClick={() => deleteTodo(todo.id)} color="secondary">
                            <DeleteIcon />
                        </IconButton>
                    </MenuItem>
                    :
                    <div>
                        <MenuItem onClick={handleClose}>
                            <IconButton aria-label='delete' onClick={() => editHandler(todo.id)} color="primary" size="small">
                                <EditSharpIcon />
                            </IconButton>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <IconButton aria-label='delete' onClick={() => showDialog(todo.id, 'Delete Task', 'Are you sure you want to delete this ?')} color="secondary" size="small">
                                <DeleteIcon />
                            </IconButton>
                        </MenuItem>
                    </div>
                }
            </Menu>
        </>
    )
} 

export default TodoActions;



