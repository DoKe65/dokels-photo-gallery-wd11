import React from "react";
// import { Routes, Route, NavLink, Navigate } from "react-router-dom";

const Navigation = ({changeTopic}) => {
  return (
    <nav className="main-nav">
      <ul>
        <li><a onClick={() => changeTopic("cats")}>Cats</a></li>
        <li><a onClick={() => changeTopic("dogs")}>Dogs</a></li>
        <li><a onClick={() => changeTopic("birds")}>Birds</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;