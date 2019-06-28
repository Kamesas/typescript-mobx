import React from "react";
import "./Header.css";
import AddForm from "./AddForm";
import Search from "./Search";

const Header = () => {
  return (
    <div className="Header">
      <AddForm />
      <Search />
    </div>
  );
};

export default Header;
