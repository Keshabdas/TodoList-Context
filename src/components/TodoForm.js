import React, { useState, useContext } from 'react'
import { TextField } from '@material-ui/core'
import {GlobalContext} from "../context/Provider"

function TodoForm({saveTodo}) {
    const [value, setvalue] = useState('');
    const {addTodo}  = useContext(GlobalContext);

    return (
        <form
            onSubmit={event => {
                event.preventDefault();
                addTodo(value);
                setvalue('')
            }}
        >
            <TextField 
                variant="outlined" 
                placeholder="type and hit enter..."  
                value={value} 
                onChange={(e)=> setvalue(e.target.value)} 
                fullWidth 
            />
        </form>
    )
}

export default TodoForm;
