import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar">
      <Link className="navbar-logo" to={{ pathname: "/" }}>
        Milburn Village Hall
      </Link>
      <div className="navbar-menu-container">
        <ul className="nav-menu-options">
          <li>
            <Link className="navitem" to={{ pathname: "/whats-on" }}>
              WHAT'S ON
            </Link>
          </li>
          <li>
            <Link className="navitem" to={{ pathname: "/about" }}>
              ABOUT
            </Link>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
          <li>
            <Link className="navitem" to={{ pathname: "/book" }}>
              BOOK
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Nav;
