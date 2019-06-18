import React, {useState} from 'react';
import iBook from "../../interfaces/Book";

interface UpdateFormInterface {
  updatingTask: iBook,
  updateTask(newTask: iBook): any
}

const UpdateForm = (props: UpdateFormInterface) => {

  const [newBook, setNewBook] = useState({name: props.updatingTask.bookName, author: props.updatingTask.bookAuthor});

  const handlerInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setNewBook({...newBook, [name]: value.toString()});
  };

  const updateExistedTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const updateBook: iBook = {
      id: props.updatingTask.id,
      bookName: newBook.name,
      bookAuthor: newBook.author
    };

    props.updateTask(updateBook);

  };

  return (
    <form onSubmit={updateExistedTask}>
      <input type="text" name='name' value={newBook.name} onChange={handlerInputChange} />
      <input type="text" name='author' value={newBook.author} onChange={handlerInputChange} />
      <button type={"submit"}>Update</button>
    </form>
  );
};

export default UpdateForm;
