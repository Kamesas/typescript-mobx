import React from 'react';
import iTask from "../../interfaces/Task";

interface toDoItemProps {
  taskItem: iTask,
  deleteNote: Function,
  selectUpdatingTask: Function
}

const ToDoItem = (props: toDoItemProps) => {
  return (
    <li className='ToDoItem'>
      {props.taskItem.task}
      <button onClick={() => props.deleteNote(props.taskItem.id)}>Del</button>
      <button onClick={() => props.selectUpdatingTask(props.taskItem)}>Update</button>
    </li>
  );
};

export default ToDoItem;
