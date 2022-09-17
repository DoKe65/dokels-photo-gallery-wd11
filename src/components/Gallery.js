import React from "react";
import Image from "./Image";
import Noresults from "./Noresults";

const Gallery = ({images, topic, title}) => {
  let imgs;
  if (images.length > 0) {
    imgs = images.map(image => {
      return <Image url={image.url} key={image.key} alt={image.alt} />;
    });
  } else {
    return <Noresults topic={topic} />;
  }
  return (
    <div className="photo-container">
      <h2>{title}</h2>
      <ul>
        {imgs}
      </ul>
    </div>
  );
};

export default Gallery;