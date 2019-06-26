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

const Books = (props: IBooksStore) => {
  const [isShowingModal, setShowingModal] = useState(false);
  const [updatingTask, setUpdatingTask] = useState<iBook>();
  const [inputValue, setFilterValue] = useState<string>("");

  const filterValue = (value: string) => {
    setFilterValue(value);
  };

  function searchHandle(value: string) {
    if (value === "") {
      return props.booksStore && props.booksStore.books;
    }

    return (
      props.booksStore &&
      props.booksStore.books.filter(item => {
        const allValues = item.bookAuthor + " " + item.bookName;

        return allValues
          .toLocaleLowerCase()
          .includes(value.trim().toLocaleLowerCase());
      })
    );
  }

  const toggleModalHandler = () => {
    setShowingModal(!isShowingModal);
  };

  const addBook = (newBook: iBook) => {
    props.booksStore && props.booksStore.addNewBook(newBook);
  };

  const deleteNote = (idTask: string | number) => {
    props.booksStore && props.booksStore.removeBook(idTask);
  };

  const selectUpdatingTask = (task: iBook) => {
    toggleModalHandler();
    setUpdatingTask(task);
  };

  const updateTask = (updatedBook: iBook) => {
    toggleModalHandler();
    props.booksStore && props.booksStore.updateBook(updatedBook);
  };

  return (
    <div className="ToDoApp">
      <h1>Bookshelf</h1>

      <AppContextProvider value={{ add: addBook }}>
        <Header addBook={addBook} filterValue={filterValue} />
      </AppContextProvider>

      <div className="ToDoTable">
        {props.booksStore &&
          props.booksStore.books.map((item, i) => (
            <Book
              key={item.id}
              index={i + 1}
              deleteNote={deleteNote}
              selectUpdatingTask={selectUpdatingTask}
              bookItem={item}
            />
          ))}
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
