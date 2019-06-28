import React from "react";
import { inject, observer } from "mobx-react";
import { BooksStore } from "../../../store/Books";

interface InterfaceSearch {
  booksStore?: BooksStore;
}

const Search = (props: InterfaceSearch) => {
  const getInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.booksStore && props.booksStore.findBook(e.target.value);
  };

  return (
    <input
      type="text"
      onChange={getInputValue}
      placeholder="enter book name..."
    />
  );
};

export default inject("booksStore")(observer(Search));
