import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="clearfix">
        <div className="background-image-container">
          <div className="row">
            <div className="col-7">
              <Weather city="Rome" />
            </div>
            <div className="col-5">
              <button className="location-button">
                <i className="fa-solid fa-location-dot"></i>
                Current location
              </button>
            </div>
          </div>
          <small>
            Coded by
            <span role="img" aria-label="coder">
              👩🏻‍💻
            </span>
            <a
              href="https://www.linkedin.com/in/elmina-jamal-7a87071a1"
              target="_blank"
              rel="noreferrer"
            >
              Elmina
            </a>
            & is open-sourced on
            <a
              href="https://github.com/ElminaJam/weather-app.git"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            & hosted on
            <a
              href="https://elmina-weather-app.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>
          </small>
        </div>
      </div>
    </div>
  );
}
