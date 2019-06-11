import React, {useState, useEffect} from 'react';
import ToDoItem from "./ToDoItem";
import AddForm from "./AddForm";
import Modal from "./Modal";
import UpdateForm from "./UpdateForm";
import iTask from "../../interfaces/Task";

const existingLocal = localStorage.getItem("tasks");
const getFromLocalTasks = (existingLocal && JSON.parse(existingLocal)) || [];

const ToDo = () => {

  const [todoList, setTaskList] = useState<{ id: string | number, task: string }[]>(getFromLocalTasks);
  const [isShowingModal, setShowingModal] = useState(false);
  const [updatingTask, setUpdatingTask] = useState<iTask>();

  const addTask = (newTask: { id: string, task: string }) => {
    todoList.filter(item => item.task === newTask.task).length < 1 &&
    setTaskList([newTask, ...todoList]);
  };

  const deleteNote = (idTask: string | number) => {
    setTaskList(todoList.filter(task => task.id !== idTask))
  };

  const updateTask = (newTask: iTask) => {
    toggleModalHandler();

    setTaskList(todoList.map((val) => {
      const item = val;

      if (item.id === newTask.id) {
        item.task = newTask.task;
      }

      return item;
    }))
  };

  const openUpdateTaskModal = (task: iTask) => {
    setUpdatingTask(task);
    setShowingModal(true);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(todoList));
  });

  const toggleModalHandler = () => {
    setShowingModal(!isShowingModal)
  };

  console.log(isShowingModal);
  return (
    <div>
      <AddForm addTask={addTask}/>
      <ul>
        {Array.isArray(todoList) && todoList.map((item) => (
          <ToDoItem
            key={item.id}
            deleteNote={deleteNote}
            updateTask={openUpdateTaskModal}
            taskItem={item}/>
        ))}
      </ul>

      {isShowingModal && updatingTask ?
        <Modal close={toggleModalHandler} show={isShowingModal}>
          <UpdateForm updateTask={updateTask} task={updatingTask}/>
        </Modal>
        : null
      }

    </div>
  );
};

export default ToDo;
