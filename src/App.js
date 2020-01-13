import React, { Component } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import VisibilityTodo from './components/VisibilityTodo';
import FilterButtons from './components/FilterButtons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodo/>
        <VisibilityTodo/>
        <FilterButtons/>
      </div>
    );
  }
}

export default App;
