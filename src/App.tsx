import React from 'react';
import './App.css';
import Users from "./components/Users";
import Counter from "./components/Counter";
import ToDo from "./components/ToDo";

const App: React.FC = () => {
  return (
    <div className="App">
      <ToDo/>
      <hr/>
      <Users />
      <Counter />

    </div>
  );
};

export default App;

