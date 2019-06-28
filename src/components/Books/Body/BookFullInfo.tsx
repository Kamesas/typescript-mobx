import React, { useEffect } from "react";
import iBooks from "../../../interfaces/Book";
import "./BookFullInfo.scss";

interface iBookInfo {
  bookInfo: iBooks;
}

const BookFullInfo = (props: iBookInfo) => {
  const divRef: any = React.createRef();
  const headingRef: any = React.createRef();

  useEffect(() => {
    divRef.current.addEventListener("mousemove", function(e: any) {
      const offsetY = e.offsetY;
      const halfHigth = divRef.current.clientHeight / 2;
      const offsetX = e.offsetX;
      const halfWidth = divRef.current.clientWidth / 2;

      divRef.current.style = `transform: rotateX(${(offsetY - halfHigth) /
        5}deg) rotateY(${-(offsetX - halfWidth) / 5}deg)`;
    });

    // headingRef.current.addEventListener("mousemove", function(e: any) {
    //   const offsetY = e.offsetY;
    //   const halfHigth = divRef.current.clientHeight / 2;
    //   const offsetX = e.offsetX;
    //   const halfWidth = divRef.current.clientWidth / 2;

    //   headingRef.current.style = `transform: rotateX(${(offsetY - halfHigth) /
    //     5}deg) rotateY(${-(offsetX - halfWidth) / 5}deg)`;
    // });
  });

  return (
    <div className="BookFullInfo">
      <div className="BookImg">
        <h1 className="BookHeading" ref={headingRef}>
          Heading
        </h1>
        <img
          ref={divRef}
          className="BookImg-img"
          src="https://english-e-reader.net/covers/The_Judges_House-Bram_Stoker.jpg"
          alt="alt"
        />
      </div>

      {/* <h2>{props.bookInfo.bookAuthor}</h2> */}
    </div>
  );
};

export default BookFullInfo;
