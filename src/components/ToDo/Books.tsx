import React, {useState, useEffect} from "react";
import './ToDo.scss';
import Book from "./Body/Book";
import Modal from "./Modal";
import UpdateForm from "./UpdateForm";
import iBooks from "../../interfaces/Book";
import Header from "./Header/Header";

const existingLocal = localStorage.getItem("tasks");
const getFromLocalTasks = (existingLocal && JSON.parse(existingLocal)) || [];

const Books = () => {
  const [todoList, setTaskList] = useState<iBooks[]>(getFromLocalTasks);
  const [isShowingModal, setShowingModal] = useState(false);
  const [updatingTask, setUpdatingTask] = useState<iBooks>();
  const [inputValue, setFilterValue] = useState<string>("");

  const filterValue = (value: string) => {
    setFilterValue(value);
  };

  function searchHandle(value: string) {
    if (value === "") {
      return todoList;
    }

    return todoList.filter(item => {
      const allValues = item.bookAuthor + ' ' + item.bookName;

      return allValues
        .toLocaleLowerCase()
        .includes(value.trim().toLocaleLowerCase());
    });
  }

  const toggleModalHandler = () => {
    setShowingModal(!isShowingModal);
  };

  const addTask = (newTask: iBooks) => {
    setTaskList([newTask, ...todoList]);
  };

  const deleteNote = (idTask: string | number) => {
    setTaskList(todoList.filter(task => task.id !== idTask));
  };

  const selectUpdatingTask = (task: iBooks) => {
    toggleModalHandler();
    setUpdatingTask(task);
  };

  const updateTask = (newTask: iBooks) => {
    toggleModalHandler();

    setTaskList(
      todoList.map(item => {
        if (item.id === newTask.id) {
          item = newTask;
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
      <h1>Bookshelf</h1>
      <Header addTask={addTask} filterValue={filterValue} />

      <div className="ToDoTable">
        {Array.isArray(searchHandle(inputValue)) &&
        searchHandle(inputValue).map((item, i) => (
          <Book
            key={item.id}
            index={i + 1}
            deleteNote={deleteNote}
            selectUpdatingTask={selectUpdatingTask}
            bookItem={item}
          />
        ))}
      </div>

  {
    isShowingModal && updatingTask ? (
      <Modal close={toggleModalHandler} show={isShowingModal}>
        <UpdateForm updateTask={updateTask} updatingTask={updatingTask}/>
      </Modal>
    ) : null
  }
</div>
);
};

export default Books;
