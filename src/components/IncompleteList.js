import React, {useContext} from 'react'
import { List,  Typography } from '@material-ui/core';
import TodoItem from './TodoItem';
import {GlobalContext} from "../context/Provider"
import Nodata from './Nodata';
import { SwipeableList } from '@sandstreamdev/react-swipeable-list';
import '@sandstreamdev/react-swipeable-list/dist/styles.css';

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
                        Incomplete {props.isMobile ? null : `(${inCompleteList.length})`}
                    </Typography>
                    <SwipeableList>
                        <List> 
                            {
                                inCompleteList.map((todo) => (
                                        <TodoItem key={todo.id} todo={todo} {...props}   />
                                    ))
                                }
                        </List>
                    </SwipeableList>
                </>
            }
            
        </>
    )
}

export default IncompletedList;
