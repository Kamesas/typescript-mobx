import React, { useState, useEffect } from "react";
import "./Books.scss";
import Book from "./Body/Book";
import Header from "./Header/Header";
import { inject, observer } from "mobx-react";
import { BooksStore } from "../../store/Books";

interface IBooksStore {
  booksStore?: BooksStore;
}

const Books = (props: IBooksStore) => {
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

  const finded =
    Array.isArray(searchHandle(inputValue)) && searchHandle(inputValue);

  return (
    <div className="ToDoApp">
      <h1>Bookshelf</h1>
      <Header filterValue={filterValue} />

      <div className="ToDoTable">
        {props.booksStore &&
          props.booksStore.books &&
          props.booksStore.books.map((item, i) => (
            <Book key={item.id} index={i + 1} bookItem={item} />
          ))}
      </div>

      <div className="ToDoTable">
        {finded &&
          finded.map((item, i) => {
            return <Book key={item.id} index={i + 1} bookItem={item} />;
          })}
      </div>
    </div>
  );
};

export default inject("booksStore")(observer(Books));
