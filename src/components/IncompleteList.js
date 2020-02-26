import React, {useContext} from 'react'
import { List,  Typography } from '@material-ui/core';
import TodoItem from './TodoItem';
import {GlobalContext} from "../context/Provider"
import Nodata from './Nodata';

function IncompletedList() {
    const {inCompleteList} = useContext(GlobalContext);

    return (
        <>
            {
                inCompleteList.length == 0 || typeof(inCompleteList) === undefined ? 
                <Nodata text="No incomplete task available" /> :
                <>
                    <Typography variant="h5" align="center" color="error">
                        Incomplete ({inCompleteList.length})
                    </Typography>
                    <List>
                        {
                            inCompleteList.map((todo, index) => (
                                <TodoItem key={index} todo={todo} index={index}  />
                            ))
                        }
                    </List>
                </>
            }
            
        </>
    )
}

export default IncompletedList;
