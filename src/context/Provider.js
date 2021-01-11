import React, {createContext, useReducer, useEffect} from 'react'
import appReducer from "./AppReducer"
const initialState = {
    todos: JSON.parse(window.localStorage.getItem("todos")) || [],
    isSnackBarOpen: false,
    alertSeverity: '',
    alertMessage: '',
    isDialogOpen: false,
    dialogTitle: '',
    dialogContent: '',
    todoSelected: null,
    isDarkModeOn: Boolean(parseInt(window.localStorage.getItem("darkMode"), 10)) || false,
}

export const GlobalContext = createContext(initialState);  // Context is defined here

function Provider({children}) {
    const [state, dispatch] = useReducer(appReducer, initialState);
    
    useEffect(() => {
        UpdateLS(state.todos);
    }, [state]);

    // state bindings
    const completedList = state.todos.filter(todo => todo.isComplete === true);
    const inCompleteList = state.todos.filter(todo => todo.isComplete === false);
    const showSnackbar = state.isSnackBarOpen;
    const alertSeverity = state.alertSeverity;
    const alertMessage = state.alertMessage;
    const todoSelected = state.todoSelected;
    const isDarkModeOn = state.isDarkModeOn;

    // all actions 
    const addTodo = (value) => {
        let trimmedText = value.trim();
        let newTask = {
            id: Date.now(),
            createdAt: Date.now(),
            completedOn: null,
            taskText: trimmedText,
            isComplete: false,
            isEdit: false,
        }
        if(trimmedText.length > 0){
            dispatch({
                type: "ADD_TODO",
                payload: newTask
            });
            openSnackbar('success', 'New Task Added');
            // if (state.todos && state.todos.length < 2) setTimeout(() => openSnackbar('info', 'Double tap/click on a task to mark it Complete or Incomplete'), 5000);
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
        currentTodos[selectedIndex].completedOn = Date.now();
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
        let selectedIndex = currentTodos.findIndex(todo => todo.id === id);
        currentTodos[selectedIndex].isEdit = !currentTodos[selectedIndex].isEdit;
        if(value === ''){
            currentTodos[selectedIndex].taskText = defaultValue.trim();
        } else {
            currentTodos[selectedIndex].taskText = value.trim();
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

    const showDialog = (id, title, content) => {
        dispatch({
            type: "SHOW_DIALOG",
            payload: {id, title, content},
        })
    }

    const hideDialog = () => {
        dispatch({
            type: "HIDE_DIALOG",
        })
    }
    const changeTheme = () => {
        dispatch({
            type: "CHANGE_THEME",
            payload: !isDarkModeOn,
        });
        let mode = !isDarkModeOn ? 1 : 0;
        window.localStorage.setItem("darkMode",  mode);
    }

    const UpdateLS = (todos) => {
        let Todos = [...todos];
        window.localStorage.setItem("todos", JSON.stringify(Todos));
    }

    return (
        <GlobalContext.Provider 
            value={{
                todos: state.todos,
                completedList,
                inCompleteList,
                todoSelected,
                isDarkModeOn,
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
                showDialog,
                hideDialog,
                changeTheme,
                isDialogOpen: state.isDialogOpen,
                dialogTitle: state.dialogTitle,
                dialogContent: state.dialogContent,
            }}>
                {children}
        </GlobalContext.Provider>
    )
}

export default Provider;
