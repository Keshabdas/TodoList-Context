import React, {useContext} from 'react'
import { List,  Typography } from '@material-ui/core';
import TodoItem from './TodoItem';
import {GlobalContext} from "../context/Provider"
import Nodata from './Nodata';

function IncompletedList(props) {
    
    const {inCompleteList} = useContext(GlobalContext);

    return (
        <>
            {
                inCompleteList.length === 0 || typeof(inCompleteList) === undefined ? 
                <>
                {props.isMobile ? <Nodata primaryText="No Incompleted" secondaryText="Task Available" /> : null}
                </>
                :
                <>
                    <Typography variant="h5" align="center" color="error">
                        Incomplete ({inCompleteList.length})
                    </Typography>
                    <List> 
                        {
                            inCompleteList.map((todo) => (
                                <TodoItem key={todo.id} todo={todo} {...props}   />
                            ))
                        }
                    </List>
                </>
            }
            
        </>
    )
}

export default IncompletedList;
