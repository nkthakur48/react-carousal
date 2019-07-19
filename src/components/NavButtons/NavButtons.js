import React from "react";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";
import "./NavButtons.css";

const NavButtons = props => {
  return (
    <div className="nav-buttons-container">
      <div className="nav-button-left" onClick={() => props.click("left")}>
        <i className="fa fa-arrow-left fa-4x" />
      </div>
      <div className="nav-button-right" onClick={() => props.click("right")}>
        <i className="fa fa-arrow-right fa-4x" />
      </div>
    </div>
  );
};

export default NavButtons;
