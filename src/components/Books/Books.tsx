import React, { useState, useEffect } from "react";
import "./Books.scss";
import Book from "./Body/Book";
import Modal from "./Modal";
import UpdateForm from "./UpdateForm";
import iBook from "../../interfaces/Book";
import Header from "./Header/Header";
import { AppContextProvider } from "../contextAPI";
import { inject, observer } from "mobx-react";
import { BooksStore } from "../../store/Books";

interface IBooksStore {
  booksStore?: BooksStore;
}

// const existingLocal = localStorage.getItem("tasks");
// const getFromLocalTasks = (existingLocal && JSON.parse(existingLocal)) || [];

const Books = (props: IBooksStore) => {
  //const [todoList, setTaskList] = useState<iBook[]>(getFromLocalTasks);
  const [isShowingModal, setShowingModal] = useState(false);
  const [updatingTask, setUpdatingTask] = useState<iBook>();
  const [inputValue, setFilterValue] = useState<string>("");

  const filterValue = (value: string) => {
    setFilterValue(value);
  };

  // function searchHandle(value: string) {
  //   if (value === "") {
  //     return todoList;
  //   }

  //   return todoList.filter(item => {
  //     const allValues = item.bookAuthor + " " + item.bookName;

  //     return allValues
  //       .toLocaleLowerCase()
  //       .includes(value.trim().toLocaleLowerCase());
  //   });
  // }

  const toggleModalHandler = () => {
    setShowingModal(!isShowingModal);
  };

  const addBook = (newBook: iBook) => {
    //setTaskList([newBook, ...todoList]);
    console.log(newBook);
    props.booksStore && props.booksStore.addNewBook(newBook);
  };

  const deleteNote = (idTask: string | number) => {
    //setTaskList(todoList.filter(task => task.id !== idTask));
    console.log(idTask);
    props.booksStore && props.booksStore.removeBook(idTask);
  };

  const selectUpdatingTask = (task: iBook) => {
    toggleModalHandler();
    setUpdatingTask(task);
  };

  const updateTask = (newTask: iBook) => {
    toggleModalHandler();

    // setTaskList(
    //   todoList.map(item => {
    //     if (item.id === newTask.id) {
    //       item = newTask;
    //     }
    //     return item;
    //   })
    // );
  };
  //props.booksStore && props.booksStore.getBooksFromLocalStorage();
  useEffect(() => {
    //localStorage.setItem("tasks", JSON.stringify(todoList));
  });

  console.log(props.booksStore && props.booksStore.books);

  return (
    <div className="ToDoApp">
      <h1>Bookshelf</h1>

      <AppContextProvider value={{ add: addBook }}>
        <Header addBook={addBook} filterValue={filterValue} />
      </AppContextProvider>

      {/* <div className="ToDoTable">
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
      </div> */}

      <div>
        {props.booksStore &&
          props.booksStore.books.map((item: iBook, i: number) => {
            return (
              <li key={i}>
                {item.bookName}
                <button onClick={() => deleteNote(item.id)}>DEL</button>
              </li>
            );
          })}
      </div>

      {isShowingModal && updatingTask ? (
        <Modal close={toggleModalHandler} show={isShowingModal}>
          <UpdateForm updateTask={updateTask} updatingTask={updatingTask} />
        </Modal>
      ) : null}
    </div>
  );
};

export default inject("booksStore")(observer(Books));
