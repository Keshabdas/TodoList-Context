import React, {useContext} from 'react'
import { List,  Typography } from '@material-ui/core';
import TodoItem from './TodoItem';
import {GlobalContext} from "../context/Provider"

function IncompletedList() {
    
    const {inCompleteList} = useContext(GlobalContext);

    return (
        <>
            {
                inCompleteList.length === 0 || typeof(inCompleteList) === undefined ? 
                null
                :
                <>
                    <Typography variant="h5" align="center" color="error">
                        Incomplete ({inCompleteList.length})
                    </Typography>
                    <List> 
                        {
                            inCompleteList.map((todo) => (
                                <TodoItem key={todo.id} todo={todo}  />
                            ))
                        }
                    </List>
                </>
            }
            
        </>
    )
}

export default IncompletedList;