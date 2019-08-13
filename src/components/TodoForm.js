import React from 'react';

const TodoForm = ({addTodo, clearCompleted, item, handleItem}) => {
  const handleSubmit = event => {
    event.preventDefault();
    addTodo(item);
  };
  const handleClear = event => {
    event.preventDefault();
    clearCompleted();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
             name="item"
             placeholder="new todo"
             onChange={handleItem}
             value={item} />
      <div className="todo-form-buttons">
        <button className="todo-add" type="submit">Add</button>
        <button className="todo-clear" onClick={handleClear}>Clear</button>
      </div>
    </form>
  );
};

export default TodoForm;
