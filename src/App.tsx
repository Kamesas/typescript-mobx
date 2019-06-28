import React from "react";
import "./App.css";
import Books from "./components/Books/Books";
import bigArray from "./training/bigArray";

interface baInterface {
  id: number | string;
  name: string;
  username: string;
  email: string;
  [key: string]: any;
}

const App: React.FC = () => {
  // let a = [
  //   { a: 1, b: 2 },
  //   { a: 1, b: 2 },
  //   { a: 1, b: 2 },
  //   { a: 1, b: 2 },
  //   { a: 1, b: 2 },
  //   { a: 1, b: 2 },
  //   { a: 1, b: 2 },
  //   { a: 1, b: 2 },
  //   { a: 1, b: 2 },
  //   { a: 1, b: 2 },
  //   { a: 1, b: 2 }
  // ];

  // let b = ["a", "a", "a", "a", "a"];

  // a.forEach(o => {
  //   o.a = o.b = 0;
  // });

  // b.forEach(o => {
  //   o = o + "b";
  //   console.log(o);
  // });

  // console.log(a);
  // console.log(b);

  return (
    <div className="App">
      <Books />
      {/* {bigArray.map((item: baInterface) => {
        return Object.keys(item).map((val: string) => {
          return <h3 key={item.id}> {item[val].toString()} </h3>;
        });
      })} */}
    </div>
  );
};

export default App;
