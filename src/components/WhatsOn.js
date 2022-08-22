import React, { useState } from "react";
import { ReactEmbeddedGoogleCalendar } from "react-embedded-google-calendar";
import COFFEE from "../images/coffeemorning1smaller.png";

const WhatsOn = () => {
  const [badminton, updateBadminton] = useState(false);
  const [tableTennis, updateTableTennis] = useState(false);
  const [filmNight, updateFilmNight] = useState(false);
  const [wineClub, updateWineClub] = useState(false);
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
    } else if (title === "Film Night") {
      updateFilmNight(true);
    } else if (title === "Wine Club") {
      updateWineClub(true);
    } else if (title === "Quiz and Games Nights") {
      updateQuizGames(true);
    } else if (title === "Playgroup") {
      updatePlaygroup(true);
    } else if (title === "Arts and Crafts Workshops") {
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
    updateWineClub(false);
    updateQuizGames(false);
    updatePlaygroup(false);
    updateArtsCrafts(false);
    updateCoffeeMornings(false);
    updateMoreEvents(false);
  }

  return (
    <main>
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
      <div className={wineClub ? "whats-on-modal" : "modal-hidden"}>
        <div className="whats-on-modal_box">
          <div className="whats-on-modal_close" onClick={(e) => closeButton()}>
            <p>X Close</p>
          </div>
          <div>
            <h2>Wine club</h2>
            <p>More info coming soon</p>
          </div>
        </div>
      </div>
      <div className={filmNight ? "whats-on-modal" : "modal-hidden"}>
        <div className="whats-on-modal_box">
          <div className="whats-on-modal_close" onClick={(e) => closeButton()}>
            <p>X Close</p>
          </div>
          <div>
            <h2>Film Night</h2>
            <p>More info coming soon</p>
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
          <div>
            <h2>Arts and Crafts</h2>
            <p>More info coming soon</p>
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
            onClick={(event) => activityClick(event.target.innerText)}
          >
            <div className="h4" role="button">
              Badminton Club
            </div>
          </li>
          <li
            className="whats-on-button whats-on-button-table-tennis"
            onClick={(event) => activityClick(event.target.innerText)}
          >
            <div className="h4" role="button">
              Table Tennis Club
            </div>
          </li>
          <li
            className="whats-on-button whats-on-button-film-night"
            onClick={(event) => activityClick(event.target.innerText)}
          >
            <div className="h4" role="button">
              Film Night
            </div>
          </li>
          <li
            className="whats-on-button whats-on-button-wine-club"
            onClick={(event) => activityClick(event.target.innerText)}
          >
            <div className="h4" role="button">
              Wine Club
            </div>
          </li>
          <li
            className="whats-on-button whats-on-button-playgroup"
            onClick={(event) => activityClick(event.target.innerText)}
          >
            <div className="h4" role="button">
              Playgroup
            </div>
          </li>
          <li
            className="whats-on-button whats-on-button-quiz"
            onClick={(event) => activityClick(event.target.innerText)}
          >
            <div className="h4" role="button">
              Quiz and Games Nights
            </div>
          </li>
          <li
            className="whats-on-button whats-on-button-arts"
            onClick={(event) => activityClick(event.target.innerText)}
          >
            <div className="h4" role="button">
              Arts and Crafts Workshops
            </div>
          </li>
          {/* <li className="whats-on-button whats-on-button-ceilidhs" onClick={(event) => activityClick(event.target.innerText)}>
            <h4>Ceilidhs</h4>
          </li> */}
          <li
            className="whats-on-button whats-on-button-coffee"
            onClick={(event) => activityClick(event.target.innerText)}
          >
            <div className="h4" role="button">
              Coffee Mornings
            </div>
          </li>
          <li
            className="whats-on-button whats-on-button-pub-nights"
            onClick={(event) => activityClick(event.target.innerText)}
          >
            <div className="h4" role="button">
              Pub nights, dances and more...
            </div>
          </li>
        </ul>
        <h2 id="whats-on-calendar">Calendar of events/Hall availibility</h2>
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
