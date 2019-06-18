import React, { useState } from "react";
import iBook from "../../../interfaces/Book";

interface AddForm {
  addTask: Function;
}

const AddForm = (props: AddForm) => {
  const [newBook, setNewBook] = useState({name: '', author: ''});

  const handlerInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setNewBook({...newBook, [name]: value.toString()});
  };

  const makeNewTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTask: iBook = {
      id: new Date().toString(),
      bookName: newBook.name,
      bookAuthor: newBook.author
    };

    if (newBook.name !== "" || newBook.author !== "") {
      props.addTask(newTask);
      setNewBook({...newBook, name: '', author: ''});
    }
  };

  return (
    <form onSubmit={makeNewTask}>
      <input type="text" name='name' value={newBook.name} onChange={handlerInputChange} />
      <input type="text" name='author' value={newBook.author} onChange={handlerInputChange} />
      <button>Add new books</button>
    </form>
  );
};

export default AddForm;
