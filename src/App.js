import React from "react";
import Weather from "./Weather";
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
              backgroundImage: `url("https://s3.amazonaws.com/shecodesio-production/uploads/files/000/081/044/original/dusk.jpg?1683561814")`,
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
              >
                Elmina
              </a>{" "}
              & is open-sourced on{" "}
              <a
                href="https://github.com/ElminaJam/weather-app-react"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>{" "}
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
  } else if (hour > 20 || hour < 5) {
    return (
      <div className="App">
        <div className="clearfix">
          <div
            className="background-image-container"
            style={{
              backgroundImage: `url("https://s3.amazonaws.com/shecodesio-production/uploads/files/000/081/045/original/night-sky.jpg?1683561828")`,
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
              >
                Elmina
              </a>{" "}
              & is open-sourced on{" "}
              <a
                href="https://github.com/ElminaJam/weather-app-react"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>{" "}
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
  } else {
    return (
      <div className="App">
        <div className="clearfix">
          <div
            className="background-image-container"
            style={{
              backgroundImage: `url("https://s3.amazonaws.com/shecodesio-production/uploads/files/000/081/487/original/day-sky.jpg?1683799470")`,
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
              >
                Elmina
              </a>{" "}
              & is open-sourced on{" "}
              <a
                href="https://github.com/ElminaJam/weather-app-react"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>{" "}
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
}
