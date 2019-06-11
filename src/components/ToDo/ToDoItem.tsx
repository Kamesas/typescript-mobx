import React from 'react';
import iTask from "../../interfaces/Task";

interface toDoItemProps {
  taskItem: iTask,
  deleteNote: Function,
  updateTask: Function
}

const ToDoItem = (props: toDoItemProps) => {
  return (
    <li>
      {props.taskItem.task}
      <button onClick={() => props.deleteNote(props.taskItem.id)}>Del</button>
      <button onClick={() => props.updateTask(props.taskItem)}>Update</button>
    </li>
  );
};

export default ToDoItem;
