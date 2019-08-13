import React, { useReducer } from 'react';
import './App.css';
import {initialState, todoReducer} from './reducers/todoReducer.js';
import TodoList from './components/TodoList.js';
import TodoForm from './components/TodoForm.js';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const toggle = id => dispatch({ type: "TOGGLE_TODO", payload: id });
  const addTodo = item => dispatch({ type: "ADD_TODO", payload: item });
  const clearCompleted = () => dispatch({ type: "CLEAR_COMPLETED" });
  return (
    <div className="todo">
      <h2>Todos</h2>
      <div className="todo-body">
        <TodoForm addTodo={addTodo} clearCompleted={clearCompleted} />
        <TodoList todos={state.todos} toggle={toggle} />
      </div>
    </div>
  );
}

export default App;
