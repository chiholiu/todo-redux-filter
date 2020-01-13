import React from 'react';
import { connect } from 'react-redux';
import { getVisibleTodos } from '../components/VisibilityTodo'

import { 
    toggleTodo, 
    editTodo,
    updateEdit,
    getEditText
} from '../actions/index';

const TodoList = ({ 
    todoArray, 
    toggleTodo, 
    editTodo,
    updateEdit,
    getEditText
}) => {
    let todos = todoArray.map((item, i) => {
        return (
            item.edit ?
            <div key={i}>
                <input value={item.todoText} onChange={(e) => getEditText(e.target.value, item.id)}/>
                <button onClick={() => updateEdit(item.id)}>Save</button>
            </div>
            :
            <div key={i}>
                <div className="todo-text">
                    {item.todoText}
                </div>
              
                <input type="checkbox" checked={item.complete} onChange={() => toggleTodo(item.id)} />
                <button onClick={() => editTodo(item.id)}>Edit</button>
            </div>
        )
    })
  
    return (
        <div>
           {todos}
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id)),
    editTodo: id => dispatch(editTodo(id)),
    updateEdit: id => dispatch(updateEdit(id)),
    getEditText: (text, id) => dispatch(getEditText(text, id))
});

const mapStateToProps = state => ({
    todoArray: getVisibleTodos(state.todo, state.visibilityFilter)
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);