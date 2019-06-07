import React from 'react';
import './App.css';
import Users from "./components/Users";
import Counter from "./components/Counter";

const App: React.FC = () => {
  return (
    <div className="App">
      <Users />
      <Counter />
    </div>
  );
};

export default App;

