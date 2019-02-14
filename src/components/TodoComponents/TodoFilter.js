import React from 'react';

const TodoFilter = (props) => (
  <form className="todo-filter" onSubmit={props.onFilterSubmit}>
    <input
      type="text"
      placeholder="Filter Todos..."
      onChange={props.onFilter}
      value={props.filterText}
      name="filterText"
      autoComplete="off"
    />
  </form>
);

export default TodoFilter;
