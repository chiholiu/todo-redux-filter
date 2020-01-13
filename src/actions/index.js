export const types = {
    ADD_TODO: 'ADD_TODO',
    TOGGLE_TODO: 'TOGGLE_TODO',
    EDIT_TODO: 'EDIT_TODO',
    SAVE_EDIT: 'SAVE_EDIT',
    GET_EDIT_TEXT: 'GET_EDIT_TEXT',
    CURRENT_FILTER: 'CURRENT_FILTER',
    ALL: 'ALL',
    COMPLETE: 'COMPLETE',
    INCOMPLETE: 'INCOMPLETE'
}

let nextTodoId = 0;

export const addTodo = text => ({
    type: types.ADD_TODO,
    text,
    id: nextTodoId++,
});

export const toggleTodo = todoId => ({
    type: types.TOGGLE_TODO,
    id: todoId
});

export const editTodo = todoId => ({
    type: types.EDIT_TODO,
    id: todoId
});

export const getEditText = (editText, todoId ) => ({
    type: types.GET_EDIT_TEXT,
    editText,
    id: todoId
})

export const updateEdit = todoId => ({
    type: types.SAVE_EDIT,
    id: todoId
});

export const currentFilter = filter => ({
    type: types[filter],
    filter
});