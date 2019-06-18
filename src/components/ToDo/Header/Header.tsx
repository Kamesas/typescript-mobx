import React from 'react';
import './Header.css';
import AddForm from "./AddForm";
import Search from "./Search";

interface IHeader {
  addTask: Function,
  filterValue: Function
}

const Header = (props: IHeader ) => {
  return (
    <div className='Header'>
      <AddForm addTask={props.addTask}/>
      <Search searchHandle={props.filterValue}/>
    </div>
  );
};

export default Header;
