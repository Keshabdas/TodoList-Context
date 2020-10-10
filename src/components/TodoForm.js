import React, { useState, useContext } from 'react'
import { TextField, Paper, IconButton } from '@material-ui/core'
import {GlobalContext} from "../context/Provider"
import ClearIcon from '@material-ui/icons/Clear';

function TodoForm() {
    const [value, setvalue] = useState('');
    const {addTodo}  = useContext(GlobalContext);

    const ClearInput = () => (
        <IconButton onClick={() => setvalue('')}>
            <ClearIcon color="action" />
        </IconButton>
    );

    return (
        <Paper elevation={10} style={{marginTop: "98px"}}>
            <form
                onSubmit={event => {
                    event.preventDefault();
                    addTodo(value);
                    setvalue('')
                }}
            >
                <TextField 
                    variant="outlined" 
                    placeholder="type here to add and hit enter....."  
                    value={value} 
                    onChange={(e)=> setvalue(e.target.value)} 
                    fullWidth 
                    autoFocus={true}
                    InputProps={{
                        endAdornment: <ClearInput />
                    }}
                />
            </form>
        </Paper>
    )
}

export default TodoForm;
