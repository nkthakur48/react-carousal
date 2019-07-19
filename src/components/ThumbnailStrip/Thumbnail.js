import React from "react";

const Thumbnail = props => {
  const className = props.selected === true ? "active" : "inactive";
  return (
    <div className={className}>
      <img
        src={props.image}
        width="100px"
        height="100px"
        alt="car"
        onClick={() => {
          props.click(props.index);
        }}
      />
    </div>
  );
};

export default Thumbnail;
