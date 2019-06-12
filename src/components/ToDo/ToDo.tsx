import React, { useState, useEffect } from "react";
import ToDoItem from "./ToDoItem";
import AddForm from "./AddForm";
import Modal from "./Modal";
import UpdateForm from "./UpdateForm";
import iTask from "../../interfaces/Task";
import Search from "./Search";

const existingLocal = localStorage.getItem("tasks");
const getFromLocalTasks = (existingLocal && JSON.parse(existingLocal)) || [];

const ToDo = () => {
  const [todoList, setTaskList] = useState<iTask[]>(getFromLocalTasks);
  const [isShowingModal, setShowingModal] = useState(false);
  const [updatingTask, setUpdatingTask] = useState<iTask>();
  const [inputValue, setFilterValue] = useState<string>("");

  const filterValue = (value: string) => {
    setFilterValue(value);
  };

  function searchHandle(value: string) {
    if (value === "") {
      return todoList;
    }

    return todoList.filter(item => {
      return item.task
        .toLocaleLowerCase()
        .includes(value.trim().toLocaleLowerCase());
    });
  }

  const toggleModalHandler = () => {
    setShowingModal(!isShowingModal);
  };

  const addTask = (newTask: iTask) => {
    setTaskList([newTask, ...todoList]);
  };

  const deleteNote = (idTask: string | number) => {
    setTaskList(todoList.filter(task => task.id !== idTask));
  };

  const selectUpdatingTask = (task: iTask) => {
    toggleModalHandler();
    setUpdatingTask(task);
  };

  const updateTask = (newTask: iTask) => {
    toggleModalHandler();

    setTaskList(
      todoList.map(item => {
        if (item.id === newTask.id) {
          item.task = newTask.task;
        }
        return item;
      })
    );
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(todoList));
  });

  return (
    <div className="ToDoApp">
      <AddForm addTask={addTask} />
      <Search searchHandle={filterValue} />

      <ul className="ToDoApp__list">
        {Array.isArray(searchHandle(inputValue)) &&
          searchHandle(inputValue).map(item => (
            <ToDoItem
              key={item.id}
              deleteNote={deleteNote}
              selectUpdatingTask={selectUpdatingTask}
              taskItem={item}
            />
          ))}
      </ul>

      {isShowingModal && updatingTask ? (
        <Modal close={toggleModalHandler} show={isShowingModal}>
          <UpdateForm updateTask={updateTask} updatingTask={updatingTask} />
        </Modal>
      ) : null}
    </div>
  );
};

export default ToDo;
