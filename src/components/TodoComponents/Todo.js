import React from 'react';
import './Todo.css';

const Todo = (props) => {
  const { task, completed, onClick, id } = props;
  return (
    <div className={ `todo ${completed && 'completed'}` } onClick={() => onClick(id)}>
      { task }
    </div>
  );
};

export default Todo;
