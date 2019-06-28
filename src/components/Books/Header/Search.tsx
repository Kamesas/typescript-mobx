import React from "react";
import { inject, observer } from "mobx-react";
import { BooksStore } from "../../../store/Books";

interface InterfaceSearch {
  searchHandle?: Function;
  booksStore?: BooksStore;
}

const Search = (props: InterfaceSearch) => {
  const getInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    //props.searchHandle && props.searchHandle(e.target.value);

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
