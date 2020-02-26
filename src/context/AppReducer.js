export default (state, action) => {
    switch(action.type){
        case "ADD_TODO":
            return {
                ...state,
                todos: [...state.todos, action.payload],
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
        default: 
            return state;
    }
}


