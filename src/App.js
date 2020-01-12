import React, { Component } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import FilterButtons from './components/FilterButtons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodo/>
        <TodoList/>
        <FilterButtons/>
      </div>
    );
  }
}

export default App;
