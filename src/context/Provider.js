import React, {createContext, useReducer, useEffect} from 'react'
import appReducer from "./AppReducer"
const initialState = {
    todos: JSON.parse(window.localStorage.getItem("todos")) || [],
    isSnackBarOpen: false,
    alertSeverity: '',
    alertMessage: '',
}

export const GlobalContext = createContext(initialState);  // Context is defined here

function Provider({children}) {
    const [state, dispatch] = useReducer(appReducer, initialState);
    
    // state bindings
    const completedList = state.todos.filter(todo => todo.isComplete === true);
    const inCompleteList = state.todos.filter(todo => todo.isComplete === false);
    const showSnackbar = state.isSnackBarOpen;
    const alertSeverity = state.alertSeverity;
    const alertMessage = state.alertMessage;

    // all actions 
    const addTodo = (value) => {
        let trimmedText = value.trim();
        let newTask = {
            id: Date.now(),
            createdAt: Date.now(),
            taskText: trimmedText,
            isComplete: false,
            isEdit: false,
        }
        if(trimmedText.length > 0){
            dispatch({
                type: "ADD_TODO",
                payload: newTask
            });
            openSnackbar('success', 'New Task Added')
        }
    }

    const deleteTodo = (value) => {
        dispatch({
            type: "REMOVE_TODO",
            payload: value
        });
        openSnackbar('error', 'Task Deleted.')
    }   

    const onCheckHandler = (id) => {
        let currentTodos = [...state.todos];
        let selectedIndex = currentTodos.findIndex(todo => todo.id === id);
        currentTodos[selectedIndex].isComplete = !currentTodos[selectedIndex].isComplete;
        currentTodos[selectedIndex].isEdit = false;
        dispatch({
            type: "CHECK_HANDLER",
            payload: currentTodos
        })
        currentTodos[selectedIndex].isComplete && openSnackbar('success', 'Task Completed.');
    }

    const editHandler = (id) => {
        let currentTodos = [...state.todos];
        let selectedIndex = currentTodos.findIndex(todo => todo.id === id);
        currentTodos[selectedIndex].isEdit = !currentTodos[selectedIndex].isEdit;
        dispatch({
            type: "EDIT_TODO",
            payload: currentTodos
        })
    }

    const editDone = (id, value, defaultValue) => {
        let currentTodos = [...state.todos];
        let selectedIndex = currentTodos.findIndex(todo => todo.id == id);
        currentTodos[selectedIndex].isEdit = !currentTodos[selectedIndex].isEdit;
        if(value === ''){
            currentTodos[selectedIndex].taskText = defaultValue;
        } else {
            currentTodos[selectedIndex].taskText = value;
        }
        dispatch({
            type: "TEXT_EDIT_TODO",
            payload: currentTodos
        })
        openSnackbar('success', 'Task Edited.');
    }

    const openSnackbar = (type, msg) => {
        dispatch({
            type: "OPEN_SNACKBAR",
            payload: {alertType: type, message: msg}
        })
    }
    const closeSnackbar = (type, msg) => {
        dispatch({
            type: "CLOSE_SNACKBAR",
        });
    }

    useEffect(() => {
        const UpdateLS = (todos) => {
            let Todos = [...todos];
            window.localStorage.setItem("todos", JSON.stringify(Todos));
        }
        UpdateLS(state.todos);
    }, [state])


    return (
        <GlobalContext.Provider 
            value={{
                todos: state.todos,
                completedList,
                inCompleteList,
                addTodo,
                deleteTodo,
                onCheckHandler,
                editHandler,
                editDone,
                showSnackbar,
                alertSeverity,
                alertMessage,
                openSnackbar,
                closeSnackbar,
            }}>
                {children}
        </GlobalContext.Provider>
    )
}

export default Provider;
