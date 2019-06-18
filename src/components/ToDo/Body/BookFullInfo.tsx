import React from 'react';
import iBooks from "../../../interfaces/Book";

interface iBookInfo{
  bookInfo: iBooks,
};

const BookFullInfo = (props: iBookInfo) => {
  return (
    <div className='BookFullInfo'>
      <h1>{props.bookInfo.bookName}</h1>
      <h2>{props.bookInfo.bookAuthor}</h2>
    </div>
  );
};

export default BookFullInfo;
