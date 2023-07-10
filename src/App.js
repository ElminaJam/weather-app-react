import React from "react";
import Weather from "./Weather";
import backgroundDay from "./images/day-sky.jpg";
import backgroundDusk from "./images/dusk.jpg";
import backgroundNight from "./images/night-sky.jpg";
import "./App.css";

export default function App() {
  let hour = new Date().getHours();

  if (hour > 17 && hour < 21) {
    return (
      <div className="App">
        <div className="clearfix">
          <div
            className="background-image-container"
            style={{
              backgroundImage: `url(${backgroundDusk})`,
            }}
          >
            <Weather city="Rome" />
            <small>
              Coded by{" "}
              <span role="img" aria-label="coder">
                👩🏻‍💻
              </span>{" "}
              <a
                href="https://www.linkedin.com/in/elmina-jamal-7a87071a1"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn Profile"
              >
                Elmina
              </a>{" "}
              & is open-sourced on{" "}
              <a
                href="https://github.com/ElminaJam/weather-app-react"
                target="_blank"
                rel="noreferrer"
                title="GitHub Weather App"
              >
                GitHub
              </a>{" "}
              & hosted on{" "}
              <a
                href="https://elmina-weather-app-react.netlify.app/"
                target="_blank"
                rel="noreferrer"
                title="Netlify Weather App"
              >
                Netlify
              </a>
            </small>
          </div>
        </div>
      </div>
    );
  } else if (hour > 20 || hour < 5) {
    return (
      <div
        className="App"
        style={{ color: "#fff195", textShadow: "#000 0px 0px 5px" }}
      >
        <div className="clearfix">
          <div
            className="background-image-container"
            style={{
              backgroundImage: `url(${backgroundNight})`,
            }}
          >
            <Weather city="Rome" />
            <small>
              Coded by{" "}
              <span role="img" aria-label="coder">
                👩🏻‍💻
              </span>{" "}
              <a
                href="https://www.linkedin.com/in/elmina-jamal-7a87071a1"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn Profile"
              >
                Elmina
              </a>{" "}
              & is open-sourced on{" "}
              <a
                href="https://github.com/ElminaJam/weather-app-react"
                target="_blank"
                rel="noreferrer"
                title="GitHub Weather App"
              >
                GitHub
              </a>{" "}
              & hosted on{" "}
              <a
                href="https://elmina-weather-app-react.netlify.app/"
                target="_blank"
                rel="noreferrer"
                title="Netlify Weather App"
              >
                Netlify
              </a>
            </small>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="App">
        <div className="clearfix">
          <div
            className="background-image-container"
            style={{
              backgroundImage: `url(${backgroundDay})`,
            }}
          >
            <Weather city="Rome" />
            <small>
              Coded by{" "}
              <span role="img" aria-label="coder">
                👩🏻‍💻
              </span>{" "}
              <a
                href="https://www.linkedin.com/in/elmina-jamal-7a87071a1"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn Profile"
              >
                Elmina
              </a>{" "}
              & is open-sourced on{" "}
              <a
                href="https://github.com/ElminaJam/weather-app-react"
                target="_blank"
                rel="noreferrer"
                title="GitHub Weather App"
              >
                GitHub
              </a>{" "}
              & hosted on{" "}
              <a
                href="https://elmina-weather-app-react.netlify.app/"
                target="_blank"
                rel="noreferrer"
                title="Netlify Weather App"
              >
                Netlify
              </a>
            </small>
          </div>
        </div>
      </div>
    );
  }
}
