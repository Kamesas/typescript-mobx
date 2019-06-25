import React, {useState, Fragment} from 'react';
import './Book.css'
import iBooks from "../../../interfaces/Book";
import Modal from "../Modal";
import BookFullInfo from "./BookFullInfo";

interface ItemProps {
  bookItem: iBooks,
  deleteNote(id: string | number): any,
  selectUpdatingTask(task: iBooks): any,
  index: number
}

const Book = (props: ItemProps) => {

  const [isShowingModal, setShowingModal] = useState(false);

   const toggleModalHandler = () => {
    setShowingModal(!isShowingModal);
  };

  return (
    <Fragment>
      <div className='ToDoItem'>
        <span className="ToDoItem-cell ToDoItem-cell--number">{props.index}</span>
        <span className="ToDoItem-cell ToDoItem-cell--task" onClick={toggleModalHandler}>
        {props.bookItem.bookName}
          <br/>
          {props.bookItem.bookAuthor}
        </span>
          <span className="ToDoItem-cell ToDoItem-cell--actions">
          <button className="ToDoItem-btn" onClick={() => props.deleteNote(props.bookItem.id)}>Del</button>
          <button className="ToDoItem-btn" onClick={() => props.selectUpdatingTask(props.bookItem)}>Update</button>
        </span>
      </div>

      {isShowingModal &&
        <Modal close={toggleModalHandler} width={100} show={isShowingModal}>
          <BookFullInfo bookInfo={props.bookItem} />
        </Modal>
      }

    </Fragment>
  );
};

export default Book;
