import React from 'react';
import './Todo.css';

const Todo = (props) => {
  const { task, completed } = props;
  return (
    <div className={ `todo ${completed && 'completed'}` }>
      { task }
    </div>
  );
};

export default Todo;
