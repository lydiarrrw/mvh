import React from "react";
import { Link } from "react-router-dom";
import mvhlogo from "../images/mvh-logo-light.svg";

const Footer = () => {
  return (
    <section id="footer">
      <div className="footer-menu">
        <div className="footer_menu-item">
          <h4>About</h4>
          <ul>
            <li>
              <Link to="/about">Facilities</Link>
            </li>
            <li>
              <Link to="/whats-on">News and events</Link>
            </li>
            <li>
              <Link to="/book#book_important-documents">Policies</Link>
            </li>
          </ul>
        </div>
        <div className="footer_menu-item">
          <h4>Hall Bookings</h4>
          <ul>
            <li>
              <Link to="/whats-on#whats-on-calendar">Calendar</Link>
            </li>
            <li>
              <Link to="/book#book_hire-charges">Charges</Link>
            </li>
            <li>
              <Link to="/book#book_how-to-book">Booking enquiries</Link>
            </li>
          </ul>
        </div>
        <div className="footer_menu-item">
          <h4 id="contact">Contact</h4>
          <ul>
            <li>
              <a href="mailto:milburnvillagehall@gmail.com">Email us</a>
            </li>
            <li>
              <a
                href="https://forms.gle/mCjRBZUFBj4okmaJA"
                target="blank"
                rel="noopener"
              >
                Sign up to recieve news
              </a>
            </li>
          </ul>
        </div>
        <div className="footer_charity">
          <img
            src={mvhlogo}
            height="70px"
            className="navbar-logo-image"
            alt="milburn village hall logo"
          />
          <small>Charity commision number: 523069</small>
        </div>
      </div>
    </section>
  );
};
export default Footer;
