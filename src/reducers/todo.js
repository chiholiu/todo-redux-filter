import { types } from "../actions/index";

export const todo = (state = [], action) => {
    switch(action.type) {
        case types.ADD_TODO: 
            return [
                ...state, {
                    todoText: action.text,
                    id: action.id,
                    complete: false,
                    edit: false
                }
            ]
        case types.TOGGLE_TODO: {
            return state.map(todo => todo.id === action.id ? {
                    ...todo,
                    complete: !todo.complete}: 
                todo);               
            }
        case types.EDIT_TODO: {
            return state.map(todo => todo.id === action.id ? {
                    ...todo,
                    edit: true }: 
                todo);
            }
        case types.SAVE_EDIT: {
            return state.map(todo => todo.id === action.id ? {
                    ...todo,
                    edit: false }: 
                todo);
            }
        case types.GET_EDIT_TEXT: {
            return state.map(todo => todo.id === action.id ? {
                    ...todo,
                    edit: false }: 
            todo);
        }
        default: 
            return state;
    }
}

export default todo;