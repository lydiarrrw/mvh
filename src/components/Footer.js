import React from "react";
import mvhlogo from "../images/mvh-logo-light.svg";

const Footer = () => {
  return (
    <section id="footer">
      <div className="footer-menu">
        <div className="footer_menu-item">
          <h4>About</h4>
          <ul>
            <li>
              <a href="/mvh-example-draft/about">Facilities</a>
            </li>
            <li>
              <a href="/mvh-example-draft/whats-on">News and events</a>
            </li>
            <li>
              <a href="/mvh-example-draft/book">Policies</a>
            </li>
          </ul>
        </div>
        <div className="footer_menu-item">
          <h4>Hall Bookings</h4>
          <ul>
            <li>
              <a href="/mvh-example-draft/what's-on">Calendar</a>
            </li>
            <li>
              <a href="/mvh-example-draft/book">Charges</a>
            </li>
            <li>
              <a href="/mvh-example-draft/book">Booking enquiries</a>
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
          <img src={mvhlogo} height="70px" className="navbar-logo-image" />
          <small>Charity commision number: 523069</small>
        </div>
      </div>
    </section>
  );
};
export default Footer;
