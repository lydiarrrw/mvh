import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import mvhlogo from "../images/mvh-logo.svg";

const Nav = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <HashLink className="navbar-logo" to="/#top-content">
          <img
            src={mvhlogo}
            height="70px"
            className="navbar-logo-image"
            alt="milburn village hall logo"
          />
        </HashLink>
        <div className="navbar-menu-container">
          <ul className="nav-menu-options">
            <li>
              <HashLink className="navitem" to="/#top-content">
                HOME
              </HashLink>
            </li>
            <li>
              <HashLink className="navitem" to="/whats-on#top-content">
                WHAT'S ON
              </HashLink>
            </li>
            <li>
              <HashLink className="navitem" to="/about#top-content">
                ABOUT
              </HashLink>
            </li>
            {/* <li>
            <a href="#contact">CONTACT</a>
          </li> */}
            <li className="navitem navitem-book">
              <HashLink className="navitem" to="/book#top-content">
                BOOK
              </HashLink>
            </li>
          </ul>
        </div>
      </nav>
      <div className="nav-border"></div>
    </div>
  );
};
export default Nav;
