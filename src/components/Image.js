import React from "react";

const Image = ({url, alt}) => {
  
  return (
    <li>
      <img src={url} alt={alt} />
    </li>
  );
};

export default Image;