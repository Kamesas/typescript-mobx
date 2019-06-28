import React, { useState } from "react";
import iBook from "../../interfaces/Book";
import { inject, observer } from "mobx-react";
import { BooksStore } from "../../store/Books";

interface IBooksStore {
  booksStore?: BooksStore;
  updatingTask: iBook;
}

const UpdateForm = (props: IBooksStore) => {
  const [newBook, setNewBook] = useState({
    name: props.updatingTask.bookName,
    author: props.updatingTask.bookAuthor
  });

  const handlerInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value.toString() });
  };

  const updateExistedTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const updateBook: iBook = {
      id: props.updatingTask.id,
      bookName: newBook.name,
      bookAuthor: newBook.author
    };

    props.booksStore && props.booksStore.updateBook(updateBook);
  };

  return (
    <form onSubmit={updateExistedTask}>
      <input
        type="text"
        name="name"
        value={newBook.name}
        onChange={handlerInputChange}
      />
      <input
        type="text"
        name="author"
        value={newBook.author}
        onChange={handlerInputChange}
      />
      <button type={"submit"}>Update</button>
    </form>
  );
};

export default inject("booksStore")(observer(UpdateForm));
