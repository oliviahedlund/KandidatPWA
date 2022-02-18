import React from "react";
import { Link } from "react-router-dom";
import "./ButtonContainer.css";

function FunctionItem(props) {
  return (
    <div className="Button">
      <Link className="Button-link" to={props.path}>
        <button className="Button-grid">
          <i class={props.icon}></i>
          {props.name}
        </button>
      </Link>
    </div>
  );
}

export default FunctionItem;
