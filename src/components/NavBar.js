import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="nav-wrapper center-align">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        
        <li>
          <Link to="/search" className="nav-link">Search</Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">About</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
