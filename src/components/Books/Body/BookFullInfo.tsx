import React, { useEffect } from "react";
import iBooks from "../../../interfaces/Book";
import "./BookFullInfo.scss";
import car from "../../../assests/01-hennessey-2019-velociraptor-600-min.jpg";

interface iBookInfo {
  bookInfo: iBooks;
}

const BookFullInfo = (props: iBookInfo) => {
  const mainRef: any = React.createRef();
  const divRef: any = React.createRef();
  const headingRef: any = React.createRef();

  useEffect(() => {
    mainRef.current.addEventListener("mousemove", rotating);
    mainRef.current.addEventListener("mouseleave", rotatingDefault);
  });

  function rotating(e: any) {
    const offsetY = e.offsetY;
    const offsetX = e.offsetX;

    const halfHigth = mainRef.current.clientHeight / 2;
    const halfWidth = mainRef.current.clientWidth / 2;
    const rotateX = offsetY - halfHigth;
    const rotateY = offsetX - halfWidth;

    // image
    divRef.current.style = `transform: rotateX(${rotateX /
      20}deg) rotateY(${-rotateY / 20}deg)`;

    // heading
    headingRef.current.style = `transform: rotateX(${rotateX /
      27}deg) rotateY(${-rotateY / 27}deg)`;
  }

  function rotatingDefault() {
    divRef.current.style = "transform: rotate(0deg)";
    headingRef.current.style = "transform: rotate(0deg)";
  }

  return (
    <div className="RotationBlock">
      <div className="BookFullInfo" ref={mainRef}>
        <div className="BookHeading">
          <h1 ref={headingRef}>Heading</h1>
        </div>
        <div className="BookImg">
          <img ref={divRef} className="BookImg-img" src={car} alt="alt" />
        </div>
      </div>
    </div>
  );
};

export default BookFullInfo;
