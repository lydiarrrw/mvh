import React from "react";
import { Link } from "react-router-dom";

import mvhlogo from "../images/mvh-logo.svg";

const Nav = ({ sticky }) => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <Link
          className="navbar-logo"
          to={{ pathname: "/milburn-village-hall" }}
        >
          <img
            src={mvhlogo}
            height="70px"
            className="navbar-logo-image"
            alt="milburn village hall logo"
          />
        </Link>
        <div className="navbar-menu-container">
          <ul className="nav-menu-options">
            <li>
              <Link
                className="navitem"
                to={{ pathname: "/milburn-village-hall/" }}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                className="navitem"
                to={{ pathname: "/milburn-village-hall/whats-on" }}
              >
                WHAT'S ON
              </Link>
            </li>
            <li>
              <Link
                className="navitem"
                to={{ pathname: "/milburn-village-hall/about" }}
              >
                ABOUT
              </Link>
            </li>
            {/* <li>
            <a href="#contact">CONTACT</a>
          </li> */}
            <li className="navitem navitem-book">
              <Link
                className="navitem"
                to={{ pathname: "/milburn-village-hall/book" }}
              >
                BOOK
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="nav-border"></div>
    </div>
  );
};
export default Nav;
