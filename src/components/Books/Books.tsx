import React, { useState, useEffect } from "react";
import "./Books.scss";
import Book from "./Body/Book";
import Header from "./Header/Header";
import { inject, observer } from "mobx-react";
import { BooksStore } from "../../store/Books";
import HeadingAnimation from "./Header/HeadingAnimation";

interface IBooksStore {
  booksStore?: BooksStore;
}

const Books = (props: IBooksStore) => {
  const books = props.booksStore && props.booksStore.books;

  return (
    <div className="ToDoApp">
      <div className="heading">
        <HeadingAnimation />
      </div>
      {/* <h1>Bookshelf</h1> */}
      <Header />

      <div className="ToDoTable">
        {books &&
          books.map((item, i) => (
            <Book key={item.id} index={i + 1} bookItem={item} />
          ))}
      </div>
      <div className="ToDoTable ToDoTable-readed">
        {books &&
          books.map(
            (item, i) =>
              item.readedBook && (
                <Book key={item.id} index={i + 1} bookItem={item} />
              )
          )}
      </div>
    </div>
  );
};

export default inject("booksStore")(observer(Books));
