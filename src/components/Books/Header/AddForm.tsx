import React, { useState } from "react";
import iBook from "../../../interfaces/Book";
import { inject, observer } from "mobx-react";
import { BooksStore } from "../../../store/Books";

interface IBooksStore {
  booksStore?: BooksStore;
}

const AddForm = (props: IBooksStore) => {
  const [newBook, setNewBook] = useState({ name: "", author: "" });

  const handlerInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value.toString() });
  };

  const makeNewBook = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const newObjBook: iBook = {
      id: Date.now(),
      bookName: newBook.name,
      bookAuthor: newBook.author,
      readedBook: false
    };

    props.booksStore && props.booksStore.addNewBook(newObjBook);

    if (newBook.name !== "" || newBook.author !== "") {
      setNewBook({ ...newBook, name: "", author: "" });
    }
  };

  return (
    <form onSubmit={makeNewBook}>
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
      <button>Add new books</button>
    </form>
  );
};

export default inject("booksStore")(observer(AddForm));
