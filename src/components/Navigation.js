import React from "react";
import { Routes, Route, NavLink, Navigate, Link } from "react-router-dom";

import Gallery from "./Gallery";

const Navigation = ({changeTopic}) => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to="cats" onClick={() => changeTopic("cats")}>Cats</NavLink></li>
        <li><NavLink to="dogs" onClick={() => changeTopic("dogs")}>Dogs</NavLink></li>
        <li><NavLink to="birds" onClick={() => changeTopic("birds")}>Birds</NavLink></li>
        <li><Link to="" onClick={() => changeTopic("flower")}>Reset</Link></li>
       
        {/* <li><a onClick={() => changeTopic("cats")}>Cats</a></li>
        <li><a onClick={() => changeTopic("dogs")}>Dogs</a></li>
        <li><a onClick={() => changeTopic("birds")}>Birds</a></li> */}
      </ul>
      {/* <Routes>
        <Route path="/cats" />
        <Route path="/dogs" />
        <Route path="/birds" />
      </Routes> */}
    </nav>
  );
};

export default Navigation;