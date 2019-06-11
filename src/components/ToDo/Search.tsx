import React, {useState} from 'react';

interface InterfaceSearch {
  searchHandle: Function,
}

const Search = (props: InterfaceSearch) => {

  const [inputValue, setInputValue] = useState('');

  const getInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    props.searchHandle(e.target.value);
  };

  return (
    <input type="text" value={inputValue} onChange={getInputValue} placeholder='enter task name...'/>
  );
};

export default Search;
