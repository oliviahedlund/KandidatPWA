import React from "react";
import { Link } from "react-router-dom";
import "./ButtonContainer.css";
import "../App.css";

function ButtonContainer() {
  return (
    <div className="ColumnContainer">
      <h3>Here are your options:</h3>
      <ul>

        <Link className="Button" to="/camera">
          <button className="Button-grid">
            <i class="fas fa-camera"></i>
            Go to Camera
          </button>
        </Link>

        <Link className="Button" to="/bluetooth">
          <button className="Button-grid">
            <i class="fab fa-bluetooth"></i>
            Go to Bluetooth
          </button>
        </Link>
    

      </ul>
    </div>
  );
}

export default ButtonContainer;
