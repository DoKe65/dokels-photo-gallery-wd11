import React from "react";
import Gallery from "./Gallery";

const Home = () => {
  return (
    <div className="photo-container">
    <h2>Random Images</h2>
      {/* <Photos results={props.results} /> */}
      <Gallery />
    </div>
  );
};

export default Home;