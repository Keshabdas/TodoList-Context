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
        default: 
            return state;
    }
}


