import React from "react";
import "./CenterImage.css";

const CenterImage = props => {
  return (
    <div className="center-image-container">
      <img className="center-image" src={props.imageURL} alt="cars" />
    </div>
  );
};

export default CenterImage;
