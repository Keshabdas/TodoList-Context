import React, {useContext} from 'react'
import { List,  Typography } from '@material-ui/core';
import TodoItem from './TodoItem';
import NoData from "./Nodata";
import { GlobalContext } from '../context/Provider';



function CompletedList(props) {

    const {completedList} = useContext(GlobalContext);

    return (
        <>
            {
                completedList.length === 0 || typeof(completedList) === undefined ? 
                <>
                    {props.isMobile ? <NoData primaryText="No Completed" secondaryText="Task Available" /> : null}
                </> : 
                <>
                    <Typography variant="h5" align="center" style={{color: 'green'}}>
                        Completed ({completedList.length})
                    </Typography>
                    <List>
                        {
                            completedList.map((todo, index) => (
                                <TodoItem key={todo.id} todo={todo} {...props}  />
                            ))
                        }
                    </List>
                </>
            }
        </>
    )
}

export default CompletedList;
