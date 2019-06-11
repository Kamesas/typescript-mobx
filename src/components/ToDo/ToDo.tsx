import React, {useState, useEffect} from 'react';
import ToDoItem from "./ToDoItem";
import AddForm from "./AddForm";
import Modal from "./Modal";
import UpdateForm from "./UpdateForm";
import iTask from "../../interfaces/Task";
import Search from "./Search";

const existingLocal = localStorage.getItem("tasks");
const getFromLocalTasks = (existingLocal && JSON.parse(existingLocal)) || [];

const ToDo = () => {

  const [todoList, setTaskList] = useState<iTask []>(getFromLocalTasks);
  const [isShowingModal, setShowingModal] = useState(false);
  const [updatingTask, setUpdatingTask] = useState<iTask>();

  const searchHandle = (value: string) => {
    console.log(value);

  };

  //  displayClients(findedTask) {
  //   const serchValue = finded.toLowerCase();
  //
  //   if (finded.length === 0) {
  //     return clients;
  //   }
  //
  //   return _.filter(clients, el => {
  //     if (el !== null) {
  //       const { firstName, lastName } = el.props.client.general;
  //       const all =
  //         firstName +
  //         lastName;
  //
  //       //return all.toLowerCase().indexOf(serchValue) > -1;
  //       return all.toLowerCase().includes(serchValue);
  //     }
  //   });
  // }

  const toggleModalHandler = () => {
    setShowingModal(!isShowingModal)
  };

  const addTask = (newTask: iTask) => {
    setTaskList([newTask, ...todoList]);
  };

  const deleteNote = (idTask: string | number) => {
    setTaskList(todoList.filter(task => task.id !== idTask))
  };

  const selectUpdatingTask = (task: iTask) => {
    toggleModalHandler();
    setUpdatingTask(task);
  };

  const updateTask = (newTask: iTask) => {
    toggleModalHandler();

    setTaskList(todoList.map((item) => {
      if (item.id === newTask.id) {
        item.task = newTask.task;
      }
      return item;
    }))
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(todoList));
  });

  return (
    <div className='ToDoApp'>
      <AddForm addTask={addTask}/>
      <Search searchHandle={searchHandle}/>

      <ul className='ToDoApp__list'>
        {Array.isArray(todoList) && todoList.map((item) => (
          <ToDoItem
            key={item.id}
            deleteNote={deleteNote}
            selectUpdatingTask={selectUpdatingTask}
            taskItem={item}/>
        ))}
      </ul>

      {isShowingModal && updatingTask ?
        <Modal close={toggleModalHandler} show={isShowingModal}>
          <UpdateForm updateTask={updateTask} updatingTask={updatingTask}/>
        </Modal>
        : null
      }

    </div>
  );
};

export default ToDo;
