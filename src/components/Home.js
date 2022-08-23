<<<<<<< HEAD
import React, { useState } from "react";
=======
import React from "react";
import { Link } from "react-router-dom";
>>>>>>> 1/links-change-from-mvh-to-nothing
import MapContainer from "./MapContainer.js";
import mvhhall from "../images/MVH-banner-photo.jpg";
import newsevents from "../images/reading-hall-board-comp.png";
import bookhall from "../images/celebration-hall-small.png";
import abouthall from "../images/activities/coffee.png";

const Home = () => {
  const [loading, updateLoading] = useState(true);

  if (!(<map-component></map-component>)) {
    updateLoading(false);
  }

  return (
    <main className="parallax">
      <section id="home-header">
        <div className="home-header-title">
          <h1>Milburn Village Hall</h1>
          <p>Community and event space</p>
        </div>
        <img
          className="about-header_img"
          src={mvhhall}
          height="50px"
          alt="outside view of milburn village hall"
        />
      </section>
      <section id="mission">
        <p>
          The Hall is a friendly, welcoming space, providing regular activities
          both for villagers and for people living further afield. It has a
          well-equipped kitchen and room for events of up to 100 people standing
          and 90 seated.
        </p>
      </section>
      <section id="more-info">
        <h2>More about the hall</h2>
        <div className="more-info-cards">
          <Link className="more-info-card" to="/whats-on">
            <img
              src={newsevents}
              height="50px"
              alt="woman reading notice board"
            />
            <h3 className="more-info-card-title">What's on</h3>
            <p>Find out what's on at Milburn Village Hall</p>
          </Link>
          <Link className="more-info-card" to="/book">
            <img
              src={bookhall}
              height="50px"
              alt="hall full with diners at tables"
            />
            <h3 className="more-info-card-title">Book the hall</h3>
            <p>See prices and terms of booking</p>
          </Link>
          <Link className="more-info-card" to="/about">
            <img
              src={abouthall}
              height="50px"
              alt="people sitting at tables with coffee"
            />
            <h3 className="more-info-card-title">About the hall</h3>
            <p>Learn more about the facilities of the hall</p>
          </Link>
        </div>
      </section>
      {/* <section id="gallery">
        <p>Gallery </p>
      </section> */}
      <section id="find-us">
        <div className="find-us-details">
          <h3>Find Us</h3>
          <p>
            Milburn Village Hall
            <br />
            Milburn
            <br />
            Penrith
            <br />
            Cumbria
            <br />
            <b>CA10 1TL</b>
          </p>
        </div>
        <h5 className={loading ? "map-visible" : "map-missing"}>loading...</h5>
        <map-component></map-component>
      </section>
    </main>
  );
};
export default Home;
