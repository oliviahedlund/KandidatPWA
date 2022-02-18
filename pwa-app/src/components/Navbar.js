import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

//added font for icon in public/index.html

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <i class="fas fa-paper-plane"></i>
          OLIN Webb
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
