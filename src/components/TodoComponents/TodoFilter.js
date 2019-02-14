import React from 'react';

const TodoFilter = (props) => (
  <form className="todo-filter" onSubmit={props.onFilter}>
    <input
      type="text"
      placeholder="Filter Todos..."
      onChange={props.onFilter}
      value={props.filterText}
      name="filterText"
    />
  </form>
);

export default TodoFilter;
