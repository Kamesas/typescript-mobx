import React, {useState} from "react";
import iBook from "../../../interfaces/Book";
import {AppContextConsumer} from '../../contextAPI';


interface AddForm {
  addBook: Function;
}

const AddForm = (props: AddForm) => {
  const [newBook, setNewBook] = useState({name: '', author: ''});

  const handlerInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setNewBook({...newBook, [name]: value.toString()});
  };

  const makeNewBook = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newObjBook: iBook = {
      id: new Date().toString(),
      bookName: newBook.name,
      bookAuthor: newBook.author
    };

    if (newBook.name !== "" || newBook.author !== "") {
      props.addBook(newObjBook);
      setNewBook({...newBook, name: '', author: ''});
    }
  };
 console.log(props);
  return (
    <AppContextConsumer>
      {add => add && (
        <form onSubmit={makeNewBook}>
          <input type="text" name='name' value={newBook.name} onChange={handlerInputChange}/>
          <input type="text" name='author' value={newBook.author} onChange={handlerInputChange}/>
          <button>Add new books</button>
          {console.log(add)}
        </form>
      )}
    </AppContextConsumer>

  );
};

export default AddForm;
