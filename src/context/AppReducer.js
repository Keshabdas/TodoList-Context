export default (state, action) => {
    switch(action.type){
        case "ADD_TODO":
            return {
                ...state,
                todos: [action.payload, ...state.todos],
            }
        case "REMOVE_TODO":
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        case "CHECK_HANDLER":
            return {
                ...state,
                todos: action.payload
            }
        case "EDIT_TODO":
            return {
                ...state,
                todos: action.payload
            }
        case "TEXT_EDIT_TODO":
            return {
                ...state,
                todos: action.payload
            }
        case "OPEN_SNACKBAR":
            return {
                ...state,
                isSnackBarOpen: true,
                alertSeverity: action.payload.alertType,
                alertMessage: action.payload.message,
            }
        case "CLOSE_SNACKBAR":
            return {
                ...state,
                isSnackBarOpen: false,
                alertSeverity: '',
                alertMessage: '',
            }
        case "SHOW_DIALOG":
            return {
                ...state,
                isDialogOpen: true,
                todoSelected: action.payload.id,
                dialogTitle: action.payload.title,
                dialogContent: action.payload.content,
            }
        case "HIDE_DIALOG":
            return {
                ...state,
                isDialogOpen: false,
                todoSelected: null,
                dialogTitle: '',    
                dialogContent: '',
            }
        case "CHANGE_THEME":
            return {
                ...state,
                isDarkModeOn: action.payload,
            }
        case "CHANGE_MULTISELECTMODE":
            return {
                ...state,
                isMultiSelectOn: action.payload,
            }
        case "ADD_ALL_TO_SELECTED_TODOS":
            return {
                ...state,
                selectedTodos: action.payload,
            }
        case "REMOVE_FROM_SELECTED_TODOS":
            return {
                ...state,
                selectedTodos: state.selectedTodos.filter(todo => todo !== action.payload)
            }   
        case "ADD_INTO_SELECTED_TODOS":
            return {
                ...state,
                selectedTodos: [...state.selectedTodos, action.payload]
            }
        case "CLEAR_SELECTED_TOODS":
            return {
                ...state,
                selectedTodos: action.payload
            }
        default: 
            return state;
    }
}


