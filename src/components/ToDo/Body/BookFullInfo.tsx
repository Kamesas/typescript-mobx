import React from "react";
import iBooks from "../../../interfaces/Book";
import "./BookFullInfo.scss";

interface iBookInfo {
  bookInfo: iBooks;
}

const BookFullInfo = (props: iBookInfo) => {
  const moseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log(e);
  };

  return (
    <div className="BookFullInfo">
      <div className="BookImg" onMouseMove={moseMove}>
        <img
          className="BookImg-img"
          src="https://english-e-reader.net/covers/The_Judges_House-Bram_Stoker.jpg"
          alt="alt"
        />
      </div>
      <h1>{props.bookInfo.bookName}</h1>
      <h2>{props.bookInfo.bookAuthor}</h2>
    </div>
  );
};

export default BookFullInfo;
