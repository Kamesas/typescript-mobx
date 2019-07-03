import React, { useState, Fragment } from "react";
import "./Book.css";
import iBooks from "../../../interfaces/Book";
import Modal from "../Modal";
import BookFullInfo from "./BookFullInfo";
import { inject, observer } from "mobx-react";
import { BooksStore } from "../../../store/Books";
import UpdateForm from "../UpdateForm";

interface IBooksStore {
  booksStore?: BooksStore;
  bookItem: iBooks;
  index: number;
}

const Book = (props: IBooksStore) => {
  const [isShowingModal, setShowingModal] = useState(false);
  const [isShowingModalUpdate, setShowingModalUpdate] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handlerCheckedChange = (): void => {
    setIsChecked(!isChecked);
    //props.booksStore && props.booksStore.readedBook(id)
  };

  const toggleModalHandler = () => {
    setShowingModal(!isShowingModal);
  };

  const toggleModalUpdateHandler = () => {
    setShowingModalUpdate(!isShowingModalUpdate);
  };

  return (
    <Fragment>
      <div className="ToDoItem">
        <span className="ToDoItem-cell ToDoItem-cell--number">
          {props.index}
        </span>
        <span
          className="ToDoItem-cell ToDoItem-cell--task"
          style={
            props.bookItem.readedBook ? { color: "#aaa" } : { color: "#000" }
          }
          onClick={toggleModalHandler}
        >
          {props.bookItem.bookName}
          <br />
          {props.bookItem.bookAuthor}
        </span>
        <span className="ToDoItem-cell ToDoItem-cell--actions">
          <input
            type="checkbox"
            checked={props.bookItem.readedBook}
            onChange={() =>
              props.booksStore && props.booksStore.readedBook(props.bookItem)
            }
          />

          <button
            className="ToDoItem-btn"
            onClick={() =>
              props.booksStore && props.booksStore.removeBook(props.bookItem.id)
            }
          >
            Del
          </button>

          <button className="ToDoItem-btn" onClick={toggleModalUpdateHandler}>
            Update
          </button>
        </span>
      </div>

      {isShowingModal && (
        <Modal close={toggleModalHandler} width={100} show={isShowingModal}>
          <BookFullInfo bookInfo={props.bookItem} />
        </Modal>
      )}

      {isShowingModalUpdate && (
        <Modal
          close={toggleModalUpdateHandler}
          width={100}
          show={isShowingModalUpdate}
        >
          <UpdateForm updatingTask={props.bookItem} />
        </Modal>
      )}
    </Fragment>
  );
};

export default inject("booksStore")(observer(Book));
