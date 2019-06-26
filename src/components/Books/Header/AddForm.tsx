import React, { useState } from "react";
import iBook from "../../../interfaces/Book";
import { AppContextConsumer, AppContextInterface } from "../../contextAPI";

interface AddForm {
  addBook: Function;
}

const AddForm = (props: AddForm) => {
  const [newBook, setNewBook] = useState({ name: "", author: "" });

  const handlerInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value.toString() });
  };

  const makeNewBook = (e: React.FormEvent<HTMLFormElement>, func: any) => {
    e.preventDefault();
    e.stopPropagation();

    const newObjBook: iBook = {
      id: Date.now(),
      bookName: newBook.name,
      bookAuthor: newBook.author
    };

    if (newBook.name !== "" || newBook.author !== "") {
      func.add(newObjBook);
      setNewBook({ ...newBook, name: "", author: "" });
    }
  };

  return (
    <AppContextConsumer>
      {add =>
        add && (
          <form
            onSubmit={e => {
              makeNewBook(e, add);
            }}
          >
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
        )
      }
    </AppContextConsumer>
  );
};

export default AddForm;
