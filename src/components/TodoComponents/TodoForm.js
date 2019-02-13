import React from 'react';

const TodoForm = (props) => (
  <form onSubmit={props.addTodo}>
    <input
      type="text"
      value={props.task}
      name="taskName"
    />
    <button type="submit">Add Todo</button>
  </form>
);

export default TodoForm;
