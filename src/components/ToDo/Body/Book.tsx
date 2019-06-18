import React from 'react';
import './Book.css'
import iBooks from "../../../interfaces/Book";

interface toDoItemProps {
  bookItem: iBooks,
  deleteNote(id: string | number): any,
  selectUpdatingTask(task: iBooks): any,
  index: number
}

const Book = (props: toDoItemProps) => {
  return (
    <div className='ToDoItem'>
      <span className="ToDoItem-cell ToDoItem-cell--number">{props.index}</span>
      <span className="ToDoItem-cell ToDoItem-cell--task">
        {props.bookItem.bookName}
        <br />
        {props.bookItem.bookAuthor}
      </span>
      <span className="ToDoItem-cell ToDoItem-cell--actions">
        <button className="ToDoItem-btn" onClick={() => props.deleteNote(props.bookItem.id)}>Del</button>
        <button className="ToDoItem-btn" onClick={() => props.selectUpdatingTask(props.bookItem)}>Update</button>
      </span>
    </div>
  );
};

export default Book;
