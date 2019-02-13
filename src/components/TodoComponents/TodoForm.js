import React from 'react';

const TodoForm = (props) => (
  <form onSubmit={props.onSubmit}>
    <input
      type="text"
      value={props.task}
      name="task"
      onChange={props.onChange}
      placeholder="Enter New Task..."
      autoComplete="off"
    />
    <button type="submit">Add Todo</button>
  </form>
);

export default TodoForm;
