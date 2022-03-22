import React from "react";
import { Link } from "react-router-dom";
import "./ButtonContainer.css";
import "../App.css";

function ButtonContainer() {
  return (
    <div className="ColumnContainer">
      <h3>Here are your options:</h3>
      <ul>

        <Link className="Button-grid" to="/camera">
          <button className="Button">
            Camera
          </button>
        </Link>

        <Link className="Button-grid" to="/bluetooth">
          <button className="Button">
            Bluetooth
          </button>
        </Link>
    

      </ul>
    </div>
  );
}

export default ButtonContainer;
