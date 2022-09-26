import React, { useState } from "react";
import largehallheader from "../images/large-hall-small.png";
import largehall from "../images/empty-hall-whole.jpg";
import smallhall from "../images/small-hall-comp.png";

const About = () => {
  const [wholeHall, updateWholeHall] = useState(true);
  const [smallHall, updateSmallHall] = useState(false);
  const [largeHall, updateLargeHall] = useState(false);

  function tabClick(tabName) {
    if (tabName == "Whole Hall") {
      updateSmallHall(false);
      updateWholeHall(true);
      updateLargeHall(false);
    } else if (tabName == "Large Hall") {
      updateWholeHall(false);
      updateSmallHall(false);
      updateLargeHall(true);
    } else {
      updateSmallHall(true);
      updateWholeHall(false);
      updateLargeHall(false);
    }
  }

  return (
    <main id="top-content">
      <div className="about-header">
        <img
          className="about-header_img"
          src={largehallheader}
          height="50px"
          alt="inside the village hall"
        />
      </div>
      <div className="content-container">
        <section>
          <h1>About the hall</h1>
          <p>
            Milburn Village Hall can be hired as one whole hall, or split into
            two smaller rooms for hire using a folding Alco-Beldan partition
            door. Details on facilities and dimensions of these options are
            below.
          </p>
        </section>
        <div className="about-tab-bar">
          <h5
            className={wholeHall ? "about-tab" : "about-tab inactive-hall-tab"}
            onClick={(event) => tabClick(event.target.innerText)}
          >
            Whole Hall
          </h5>
          <h5
            className={largeHall ? "about-tab" : "about-tab inactive-hall-tab"}
            onClick={(event) => tabClick(event.target.innerText)}
          >
            Large Hall
          </h5>
          <h5
            className={smallHall ? "about-tab" : "about-tab inactive-hall-tab"}
            onClick={(event) => tabClick(event.target.innerText)}
          >
            Small Hall
          </h5>
        </div>
        <div className="about-tab_container_information">
          <article className={wholeHall ? "whole-hall" : "whole-hall-hidden"}>
            <img
              className="hall_img"
              src={largehall}
              height="50px"
              alt="whole village hall"
            />
            <h4>Key details</h4>
            <ul>
              <li>Capacity 100 (90 seated)</li>
              <li>Dimensions 6m x 15m (19'8"x 49'2")</li>
              <li>Projector, screen and fully integrated Kef sound system.</li>
            </ul>
          </article>
          <article className={largeHall ? "large-hall" : "large-hall-hidden"}>
            <img
              className="hall_img"
              src={largehallheader}
              height="50px"
              alt="large village hall"
            />
            <h4>Key details</h4>
            <ul>
              <li>Capacity 106</li>
              <li>Dimensions: 6m x 11.8m (19'8" x 38'8)</li>
              <li>Projector, screen and fully integrated Kef sound system.</li>
            </ul>
          </article>
          <article className={smallHall ? "small-hall" : "small-hall-hidden"}>
            <img
              className="hall_img"
              src={smallhall}
              height="50px"
              alt="small village hall"
            />
            <h4>Key details</h4>
            <ul>
              <li>Capacity 20/25</li>
              <li>Dimensions: 6m x 3.2m (19'8" x 10'6")</li>
            </ul>
          </article>
          <div className="about_key-info">
            <h4>Facilities</h4>
            <ul>
              <li>Comfortable padded chairs</li>
              <li>15 'lightweight' Gopack tables (seat 6 to a table)</li>
              <li>2 small Gopack tables</li>
              <li>
                Multi purpose connectable table system, can be used as tables as
                various sizes and as a stage
              </li>
              <li>Air source heating</li>
              <li> Fully equipped kitchen</li>
            </ul>
            <h4>Accessibility</h4>
            <p>The hall has the following features:</p>
            <ul>
              <li>Ramp leading to the entrance for wheelchair access</li>
              <li>Accessible toilet (wheelchair accessible)</li>
              <li>Hearing loop</li>
            </ul>
            <p>
              If you have any questions then{" "}
              <a
                className="about_contact-link"
                href="mailto:milburnvillagehall@gmail.com"
              >
                please get in touch.
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};
export default About;
