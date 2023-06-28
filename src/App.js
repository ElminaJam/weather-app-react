import React from "react";
import "./App.css";

export default function App() {
  let weatherData = {
    city: "Rome",
    temperature: 20,
    date: "Tuesday 10:00",
    description: "Sunny",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    feelsLike: 18,
    humidity: 20,
    wind: 2,
  };
  return (
    <div className="Weather">
      <div className="clearfix">
        <div className="background-image-container">
          <div className="row">
            <div className="col-8">
              <form className="search-form">
                <div className="input-icon">
                  <button className="search-icon">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                  <input
                    type="text"
                    autoComplete="off"
                    placeholder="search city"
                    className="search-form shadow-sm"
                  />
                </div>
              </form>
            </div>
            <div className="col-5">
              <button className="location-button">
                <i className="fa-solid fa-location-dot"></i>
                Current location
              </button>
            </div>
          </div>
          <header>
            <h1>{weatherData.city}</h1>
            <div className="row">
              <div className="col main">
                <div className="icon">
                  <img
                    src={weatherData.imgUrl}
                    alt={weatherData.description}
                    className="main mt-3 mb-3"
                  />
                </div>
                <span>{weatherData.description}</span>
                <div className="day">{weatherData.date}</div>
              </div>
              <div className="col second">
                <div className="float-left">
                  <strong className="temperature">
                    {weatherData.temperature}
                  </strong>
                  <span className="units">
                    <a href="/">°C</a> | <a href="/">°F</a>{" "}
                  </span>
                  <div className="weather-info">
                    <span>Feels like: {weatherData.feelsLike}°C</span>
                    <br />
                    <span> Humidity: {weatherData.humidity}%</span>
                    <br />
                    <span>Wind: {weatherData.wind} km/h</span>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="weather-forecast" value="color: #261e01"></div>
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
