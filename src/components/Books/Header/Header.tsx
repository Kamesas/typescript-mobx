import React from 'react';
import './Header.css';
import AddForm from "./AddForm";
import Search from "./Search";

interface IHeader {
  addBook: Function,
  filterValue: Function
}

const Header = (props: IHeader ) => {
  return (
    <div className='Header'>
      <AddForm addBook={props.addBook}/>
      <Search searchHandle={props.filterValue}/>
    </div>
  );
};

export default Header;
