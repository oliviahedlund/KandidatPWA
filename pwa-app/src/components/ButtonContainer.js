import React from "react";
import FunctionItem from "./FunctionItem";
import "./ButtonContainer.css";
import "../App.css";

function ButtonContainer() {
  return (
    <div className="ColumnContainer">
      <h3>Here are your options:</h3>
      <ul>
        <FunctionItem path="/camera" name="Go to Camera" icon="fas fa-camera" />
        <FunctionItem
          path="/bluetooth"
          name="Go to Bluetooth"
          icon="fab fa-bluetooth"
        />
      </ul>
    </div>
  );
}

export default ButtonContainer;
