import React from "react";
import Navigation from "./Navigation";
import Searchform from "./Searchform";

const Header = ({changeTopic}) => {
  return (
    <header>
      <Searchform changeTopic={changeTopic} />
      <Navigation changeTopic={changeTopic} />
    </header>
  );
};

export default Header;