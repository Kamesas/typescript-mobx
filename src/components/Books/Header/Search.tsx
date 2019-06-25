import React from "react";

interface InterfaceSearch {
  searchHandle: Function;
}

const Search = (props: InterfaceSearch) => {
  const getInputValue = (e: React.ChangeEvent<HTMLInputElement>) => { //ChangeEvent<HTMLInputElement>
    props.searchHandle(e.target.value);
  };

  return (
    <input
      type="text"
      onChange={getInputValue}
      placeholder="enter book name..."
    />
  );
};

export default Search;
