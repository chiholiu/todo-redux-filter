import TodoList from '../components/TodoList'
import { types } from '../actions';

export const getVisibleTodos = (todos, filter) => {
    switch(filter) {
        case types.ALL:
            console.log(todos);
            return todos;
        case types.COMPLETE:
            console.log(todos.filter(t => !t.complete));
            return todos.filter(t => !t.complete);   
        case types.INCOMPLETE:
            console.log(todos.filter(t => t.complete));
            return todos.filter(t => t.complete);
        default:
            throw new Error('Unknown filter:' + filter);
    }
}

export default TodoList;