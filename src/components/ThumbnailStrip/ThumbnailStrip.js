import React from "react";
import Thumbnail from "./Thumbnail";
import "./ThumbnailStrip.css";

const ThumbnailStrip = props => {
  return (
    <div className="thumbnail-strip-container">
      {props.images.map((image, index) => {
        return (
          <Thumbnail
            key={image}
            image={image}
            index={index}
            click={props.click}
            selected={props.selectedIndex === index ? true : false}
          />
        );
      })}
    </div>
  );
};

export default ThumbnailStrip;
