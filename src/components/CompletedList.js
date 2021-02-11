import React, {useContext} from 'react'
import { List,  Typography, IconButton } from '@material-ui/core';
import TodoItem from './TodoItem';
import NoData from "./Nodata";
import { GlobalContext } from '../context/Provider';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';


function CompletedList(props) {

    const {completedList,  handleMultiSelectMode, isMultiSelectOn, handleSelectedTodos, selectedTodos} = useContext(GlobalContext);
    const handleSelectAllCheckbox = () => {
        handleMultiSelectMode();
        if (!isMultiSelectOn) handleSelectedTodos(insertTodosId());
    }

    const insertTodosId = () => {
        let todos = completedList.map((todo) => todo.id);
        return todos;
    }
    return (
        <>
            {
                completedList.length === 0 || typeof(completedList) === undefined ? 
                <>
                    {props.isMobile ? <NoData primaryText="No Completed" secondaryText="Task Available" /> : null}
                </> : 
                <div>
                    <div style={{ display: 'flex', justifyContent: props.isMobile ? 'space-between' : 'center', alignItems: 'center' }}>
                        <Typography variant="h5" align="center" style={{color: 'green'}}>
                            Completed {props.isMobile ? null : `(${completedList.length})`}
                        </Typography>
                        {props.isMobile ? (
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Typography variant="body2" color="textPrimary">
                                    Select All
                                </Typography>
                                <div onClick={() => handleSelectAllCheckbox()}>
                                    <IconButton style={{ paddingRight: 0, color: 'blue' }}>
                                        {isMultiSelectOn || (selectedTodos.length > 0 && selectedTodos.length === completedList.length) ? (
                                            <CheckBoxIcon />
                                        ) : (
                                            <CheckBoxOutlineBlankIcon />
                                        )}
                                    </IconButton>
                                </div>
                            </div>
                        ) : null}
                    </div>
                    <List>
                        {
                            completedList.map((todo, index) => (
                                <TodoItem key={todo.id} todo={todo} {...props} completedList={completedList}  />
                            ))
                        }
                    </List>
                </div>
            }
        </>
    )
}

export default CompletedList;
