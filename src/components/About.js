import React from "react";

const About = () => {
  return (
    <div>
      <div className="about-header">
        <img className="about-header_img" src="../assets/large-hall.jpg" />
      </div>
      <div className="content-container">
        <section>
          <h1>About the hall</h1>
          Milburn Village Hall can be hired as one whole hall (6m x 17.7m), or
          split into two smaller rooms for hire using the DOOR SYSTEM name.
          Details on dimensions of these are below.
          <h2>What's in the hall</h2>
          <ul>
            <li>Chairs: 106 (max available)</li>
            <li>Tables: Xx Gopack tables, table system</li>
            <li>Stage</li>
            <li>
              Projector and sound system (ask on booking for further details)
            </li>
            <li>Heating</li>
            <li>
              Kitchen
              <ul>
                <li>Glasses (tumblers and wine glasses)</li>
                <li>Cups and saucers</li>
                <li>Crockery</li>
                <li>Cutlery</li>
                <li>Teapots</li>
                <li>Hot water thingy</li>
                <li>Big oven</li>
                <li>Fridge</li>
                <li>Pots and pans</li>
              </ul>
            </li>
          </ul>
          <h2>Accessibility</h2>
          <p>The hall has the following features:</p>
          <ul>
            <li>Ramp leading to the entrance for wheelchair access.</li>
            <li>Accessible toilet</li>
            <li>Hearing loop</li>
          </ul>
          <p>If you have any questions then please get in touch.</p>
        </section>
        <div className="about-rooms">
          <section className="room-type">
            <h2>Small Room</h2>
            <img
              className="about-rooms_img"
              src="../assets/milburn-village-hall.jpg"
            />
            <p>6m x 3m (6'8" x 9'10") </p>
            <p>Capacity (no tables) 20/25</p>
          </section>
          <section className="room-type">
            <h2>Large Room</h2>
            <img className="about-rooms_img" src="../assets/whole-hall-2.jpg" />
            <p>Dimensions 6m x 11.7m (6'8" x 38'4")</p>
            <p>Capacity (no tables) 106</p>
          </section>
        </div>
      </div>
    </div>
  );
};
export default About;
