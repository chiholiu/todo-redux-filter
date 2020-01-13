import TodoList from '../components/TodoList'
import { connect } from 'react-redux';
import { types } from '../actions';

const getVisibleTodos = (todos, filter) => {
    console.log(filter);
    switch(filter) {
        case types.ALL:
            return todos;
        case types.COMPLETE:
            return todos.filter(t => t.complete);
        case types.INCOMPLETE:
            return todos.filter(t => !t.complete);
        default:
            throw new Error('Unknown filter:' + filter);
    }
}

const mapDispatchToProps = dispatch => ({ 

})

const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);