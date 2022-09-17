import React from "react";

const Noresults = ({topic}) => {
  return (
    <div className="not-found">
      <h2>No results found.</h2>
      <p className="not-found">Your search for "{topic}" did not return any results. Please try again.</p>
    </div>
  ); 
}

export default Noresults;