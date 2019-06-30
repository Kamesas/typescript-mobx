import React from "react";
import "./App.css";
import { Store } from "./StorContext/Store";

const App: React.FC = () => {
  const store = React.useContext(Store);
  console.log(store);
  return <div className="App">jlkfadskd</div>;
};

export default App;
