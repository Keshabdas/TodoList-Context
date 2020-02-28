import React, {createContext, useReducer, useEffect} from 'react'
import appReducer from "./AppReducer"
const initialState = {
    todos: JSON.parse(window.localStorage.getItem("todos")) || [],
    user: [
        {id:1, name: "Keshab"},
        {id:2, name: "kiran"}
    ],
}

export const GlobalContext = createContext(initialState);  // Context is defined here

function Provider({children}) {
    const [state, dispatch] = useReducer(appReducer, initialState);
    
    const completedList = state.todos.filter(todo => todo.isComplete === true);
    const inCompleteList = state.todos.filter(todo => todo.isComplete === false);

    const addTodo = (value) => {
        let trimmedText = value.trim();
        let newTask = {
            id: Math.floor(Math.random() * 100000000),
            taskText: trimmedText,
            isComplete: false,
            isEdit: false,
        }
        if(trimmedText.length > 0){
            dispatch({
                type: "ADD_TODO",
                payload: newTask
            })
        }
    }

    const deleteTodo = (value) => {
        dispatch({
            type: "REMOVE_TODO",
            payload: value
        })
    }

    const onCheckHandler = (id) => {
        let currentTodos = [...state.todos];
        let selectedIndex = currentTodos.findIndex(todo => todo.id == id);
        currentTodos[selectedIndex].isComplete = !currentTodos[selectedIndex].isComplete;
        currentTodos[selectedIndex].isEdit = false;
        dispatch({
            type: "CHECK_HANDLER",
            payload: currentTodos
        })
    }

    const editHandler = (id) => {
        let currentTodos = [...state.todos];
        let selectedIndex = currentTodos.findIndex(todo => todo.id == id);
        currentTodos[selectedIndex].isEdit = !currentTodos[selectedIndex].isEdit;
        dispatch({
            type: "EDIT_TODO",
            payload: currentTodos
        })
    }

    const editDone = (id, value) => {
        let currentTodos = [...state.todos];
        let selectedIndex = currentTodos.findIndex(todo => todo.id == id);
        currentTodos[selectedIndex].isEdit = !currentTodos[selectedIndex].isEdit;
        currentTodos[selectedIndex].taskText = value;
        dispatch({
            type: "TEXT_EDIT_TODO",
            payload: currentTodos
        })
    }

    useEffect(() => {
        const UpdateLS = (todos) => {
            let Todos = [...todos];
            window.localStorage.setItem("todos", JSON.stringify(Todos));
        }
        UpdateLS(state.todos);
    }, [state.todos])


    return (
        <GlobalContext.Provider value={{
            todos: state.todos,
            completedList,
            inCompleteList,
            addTodo,
            deleteTodo,
            onCheckHandler,
            editHandler,
            editDone
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default Provider;
