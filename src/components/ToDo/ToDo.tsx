// import React, {useState, useEffect, useRef} from 'react';
import React, {useState, useEffect} from 'react';
import ToDoItem from "./ToDoItem";
import AddForm from "./AddForm";

const existingLocal = localStorage.getItem("tasks");
const getFromLocalTasks = (existingLocal && JSON.parse(existingLocal)) || [];

const ToDo = () => {

  const [todoList, setTaskList] = useState<{ id: string, task: string }[]>(getFromLocalTasks);

  const addTask = (newTask: { id: string, task: string }) => {
    todoList.filter(item  => item.task === newTask.task).length < 1 &&
    setTaskList([newTask, ...todoList]);
  };

  useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(todoList));
  });

  return (
    <div>
      <AddForm addTask={addTask}/>
      <ul>
        {Array.isArray(todoList) && todoList.map((item) => (
          <ToDoItem key={item.id} taskItem={item}/>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
