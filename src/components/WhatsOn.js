import React, { useState } from "react";
// import { ReactEmbeddedGoogleCalendar } from "react-embedded-google-calendar";
import COFFEE from "../images/coffeemorning1smaller.png";

const WhatsOn = () => {
  const [badminton, updateBadminton] = useState(false);
  const [tableTennis, updateTableTennis] = useState(false);
  const [filmNight, updateFilmNight] = useState(false);
  const [playgroup, updatePlaygroup] = useState(false);
  const [quizGames, updateQuizGames] = useState(false);
  const [artsCrafts, updateArtsCrafts] = useState(false);
  const [coffeeMornings, updateCoffeeMornings] = useState(false);
  const [moreEvents, updateMoreEvents] = useState(false);

  function activityClick(title) {
    if (title === "Badminton Club") {
      updateBadminton(true);
    } else if (title === "Table Tennis Club") {
      updateTableTennis(true);
    } else if (title === "Film Club") {
      updateFilmNight(true);
    } else if (title === "Quiz and Games Nights") {
      updateQuizGames(true);
    } else if (title === "Playgroup") {
      updatePlaygroup(true);
    } else if (title === "Handicraft Group") {
      updateArtsCrafts(true);
    } else if (title === "Coffee Mornings") {
      updateCoffeeMornings(true);
    } else if (title === "Pub nights, dances and more...") {
      updateMoreEvents(true);
    }
  }

  function closeButton() {
    updateBadminton(false);
    updateTableTennis(false);
    updateFilmNight(false);
    updateQuizGames(false);
    updatePlaygroup(false);
    updateArtsCrafts(false);
    updateCoffeeMornings(false);
    updateMoreEvents(false);
  }

  return (
    <main id="top-content">
      <div className="about-header">
        <img
          className="about-header_img"
          src={COFFEE}
          height="70px"
          alt="people attend coffee morning in hall"
        />
      </div>
      <div className={badminton ? "whats-on-modal" : "modal-hidden"}>
        <div className="whats-on-modal_box">
          <div className="whats-on-modal_close" onClick={(e) => closeButton()}>
            <p role="button">X Close</p>
          </div>
          <div>
            <h2>Badminton club</h2>
            <p>More info coming soon</p>
          </div>
        </div>
      </div>
      <div className={tableTennis ? "whats-on-modal" : "modal-hidden"}>
        <div className="whats-on-modal_box">
          <div className="whats-on-modal_close" onClick={(e) => closeButton()}>
            <p>X Close</p>
          </div>
          <div>
            <h2>Table tennis club</h2>
            <p>More info coming soon</p>
          </div>
        </div>
      </div>
      <div className={filmNight ? "whats-on-modal" : "modal-hidden"}>
        <div className="whats-on-modal_box">
          <div className="whats-on-modal_close" onClick={(e) => closeButton()}>
            <p>X Close</p>
          </div>
          <div className="whats-on-modal_content">
            <h2>Film Club</h2>
            <p>
              We meet the last Friday of every month except December when there
              is no film night. <br /> <br /> A variety of films are chosen and
              provided by members who pay an annual membership fee. If you wish
              to come and give it try or can only come occasionally you are
              welcome to attend as a guest for a small charge. <br /> <br />
              We start at 7.30pm and have a social break half way through the
              film when you can purchase wine, tea or coffee with a few nibbles
              provided.
            </p>
          </div>
        </div>
      </div>
      <div className={quizGames ? "whats-on-modal" : "modal-hidden"}>
        <div className="whats-on-modal_box">
          <div className="whats-on-modal_close" onClick={(e) => closeButton()}>
            <p>X Close</p>
          </div>
          <div>
            <h2>Quiz and Games</h2>
            <p>More info coming soon</p>
          </div>
        </div>
      </div>
      <div className={playgroup ? "whats-on-modal" : "modal-hidden"}>
        <div className="whats-on-modal_box">
          <div className="whats-on-modal_close" onClick={(e) => closeButton()}>
            <p>X Close</p>
          </div>
          <div>
            <h2>Playgroup</h2>
            <p>More info coming soon</p>
          </div>
        </div>
      </div>
      <div className={artsCrafts ? "whats-on-modal" : "modal-hidden"}>
        <div className="whats-on-modal_box">
          <div className="whats-on-modal_close" onClick={(e) => closeButton()}>
            <p>X Close</p>
          </div>
          <div className="whats-on-modal_content">
            <h2>Handicraft Group</h2>
            <p>
              We meet monthly on the 3 rd Thursday evening 7.30pm until 9pm.
              <br /> <br />
              Come along and work on your chosen craft, enjoy a cuppa and chat
              with others who are working on a variety of projects such as
              knitting, cross stitch, embroidery, quilting, weaving and felting.
              <br /> <br />
              We look forward to seeing you soon.
            </p>
          </div>
        </div>
      </div>
      <div className={coffeeMornings ? "whats-on-modal" : "modal-hidden"}>
        <div className="whats-on-modal_box">
          <div className="whats-on-modal_close" onClick={(e) => closeButton()}>
            <p>X Close</p>
          </div>
          <div>
            <h2>Coffee Mornings</h2>
            <p>More info coming soon</p>
          </div>
        </div>
      </div>
      <div className={moreEvents ? "whats-on-modal" : "modal-hidden"}>
        <div className="whats-on-modal_box">
          <div className="whats-on-modal_close" onClick={(e) => closeButton()}>
            <p>X Close</p>
          </div>
          <div>
            <h2>Other Events</h2>
            <p>More info coming soon</p>
          </div>
        </div>
      </div>
      <div className="content-container">
        <h1>What's On</h1>
        <h2>Our regular activities</h2>
        <ul className="whats-on-activities">
          <li
            className="whats-on-button whats-on-button-badminton"
            onClick={() => activityClick("Badminton Club")}
          >
            <div className="h4" role="button">
              Badminton Club
            </div>
          </li>
          <li
            className="whats-on-button whats-on-button-table-tennis"
            onClick={() => activityClick("Table Tennis Club")}
          >
            <div className="h4" role="button">
              Table Tennis Club
            </div>
          </li>
          <li
            className="whats-on-button whats-on-button-film-night"
            onClick={() => activityClick("Film Club")}
          >
            <div className="h4" role="button">
              Film Club
            </div>
          </li>
          <li
            className="whats-on-button whats-on-button-playgroup"
            onClick={() => activityClick("Playgroup")}
          >
            <div className="h4" role="button">
              Playgroup
            </div>
          </li>
          <li
            className="whats-on-button whats-on-button-quiz"
            onClick={() => activityClick("Quiz and Games Nights")}
          >
            <div className="h4" role="button">
              Quiz and Games Nights
            </div>
          </li>
          <li
            className="whats-on-button whats-on-button-arts"
            onClick={() => activityClick("Handicraft Group")}
          >
            <div className="h4" role="button">
              Handicraft Group
            </div>
          </li>
          {/* <li className="whats-on-button whats-on-button-ceilidhs" onClick={(event) => activityClick(event.target.innerText)}>
            <h4>Ceilidhs</h4>
          </li> */}
          <li
            className="whats-on-button whats-on-button-coffee"
            onClick={() => activityClick("Coffee Mornings")}
          >
            <div className="h4" role="button">
              Coffee Mornings
            </div>
          </li>
          <li
            className="whats-on-button whats-on-button-pub-nights"
            onClick={() => activityClick("Pub nights, dances and more...")}
          >
            <div className="h4" role="button">
              Pub nights, dances and more...
            </div>
          </li>
        </ul>
        <h2 id="whats-on-calendar">Calendar of events/Hall availability</h2>
        <div className="google-calendar">
          <div
            className="smgc-calendar-placeholder"
            id="smgc-cal-YhUAQFrSY5awkPWnT7VD"
          ></div>
        </div>
      </div>
    </main>
  );
};
export default WhatsOn;
