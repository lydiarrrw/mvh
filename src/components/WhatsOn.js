import React from "react";
import { ReactEmbeddedGoogleCalendar } from "react-embedded-google-calendar";

const WhatsOn = () => {
  return (
    <main>
      <div className="about-header">
        <img className="about-header_img" src="../assets/coffee-morning1.jpg" />
      </div>
      <div className="content-container">
        <h1>What's On</h1>
        <h2>Community Events</h2>
        <ul>
          <li>Mondays 7.30pm - Badminton Club</li>
          <li>Thursdays 9.30am - Playgroup</li>
          <li>Third Thursday of the month - 7.30pm - Handicrafts</li>
          <li>Last Friday of month - 7pm - Film Club</li>
          <li>First Saturday of month - 10.30am - Church Coffee Morning</li>
          <li>Third Saturday of month - 10.30am - Church Coffee Morning</li>
        </ul>
        <h2>Calendar of events/Hall availibility</h2>
        <div>
          <ReactEmbeddedGoogleCalendar
            publicUrl="https://calendar.google.com/calendar/embed?src=milburnvillagehall%40gmail.com&ctz=Europe%2FLondon"
            height="500px"
            width="100%"
          />
        </div>
      </div>
    </main>
  );
};
export default WhatsOn;
