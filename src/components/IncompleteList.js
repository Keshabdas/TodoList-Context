import React, {useContext} from 'react'
import { List,  Typography, IconButton } from '@material-ui/core';
import TodoItem from './TodoItem';
import {GlobalContext} from "../context/Provider"
import Nodata from './Nodata';
import { SwipeableList } from '@sandstreamdev/react-swipeable-list';
import '@sandstreamdev/react-swipeable-list/dist/styles.css';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

function IncompletedList(props) {
    const {inCompleteList, handleMultiSelectMode, isMultiSelectOn, handleSelectedTodos} = useContext(GlobalContext);

    const handleSelectAllCheckbox = () => {
        handleMultiSelectMode();
        if (!isMultiSelectOn) handleSelectedTodos(insertTodosId());
    }

    const insertTodosId = () => {
        let todos = inCompleteList.map((todo) => todo.id);
        return todos;
    }

    return (
        <>
            {
                inCompleteList.length === 0 || typeof(inCompleteList) === undefined ? 
                <>
                {props.isMobile ? <Nodata primaryText="No Incompleted" secondaryText="Task Available" /> : null}
                </>
                :
                <div>
                    <div style={{ display: 'flex', justifyContent: props.isMobile ? 'space-between' : 'center', alignItems: 'center' }}>
                        <Typography variant="h5" color="error">
                            Incomplete {props.isMobile ? null : `(${inCompleteList.length})`}
                        </Typography>
                        {props.isMobile ? (
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Typography variant="body2" color="textPrimary">
                                    Select All
                                </Typography>
                                <div onClick={() => handleSelectAllCheckbox()}>
                                    {isMultiSelectOn ? (
                                    <IconButton>
                                            <CheckBoxIcon style={{ color: 'blue' }} />
                                    </IconButton> 
                                    ) : (
                                        <IconButton>
                                            <CheckBoxOutlineBlankIcon style={{ color: 'blue' }} />
                                        </IconButton>
                                    )}
                                </div>
                            </div>
                        ) : null}
                    </div>
                    <SwipeableList>
                        <List> 
                            {
                                inCompleteList.map((todo) => (
                                        <TodoItem key={todo.id} todo={todo} {...props}   />
                                    ))
                                }
                        </List>
                    </SwipeableList>
                </div>
            }
            
        </>
    )
}

export default IncompletedList;
