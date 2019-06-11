import React from 'react';

interface toDoItemProps {
  taskItem: {
    id: string,
    task: string,
  }
}

const ToDoItem = (props: toDoItemProps) => {
  return (
    <li>
      {props.taskItem.task}
    </li>
  );
};

export default ToDoItem;
