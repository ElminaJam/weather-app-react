import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState("Rome");
  const [weather, setWeather] = useState({ ready: false });
  const [error, setError] = useState(null);

  function displayWeather(response) {
    setError(null);
    setWeather({
      ready: true,
      date: new Date(response.data.dt * 1000),
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      feelsLike: response.data.main.feels_like,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }
  function handleError(err) {
    console.error({ err });
    setError("We could not retrieve the city information");
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=27fb2f753cffa772c159b13a29aaa34d&units=metric`;
    axios.get(apiUrl).then(displayWeather).catch(handleError);
  }

  let form = (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="input-icon">
        <button className="search-icon">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        <input
          className="search-form shadow-sm"
          type="text"
          autoComplete="off"
          placeholder="search city..."
          onChange={updateCity}
        />
      </div>
    </form>
  );

  if (weather.ready) {
    return (
      <div>
        {form}
        <header>
          <h1>{city}</h1>
          <div className="row">
            <div className="col main">
              <div className="icon">
                <img
                  src={weather.icon}
                  alt={weather.description}
                  className="main mt-3 mb-3"
                />
                <div>{weather.description}</div>
                <div>{weather.dt}</div>
              </div>
            </div>
            <div className="col second">
              <div className="float-left">
                <div className="weather-info">
                  {" "}
                  <strong className="temperature">
                    {Math.round(weather.temperature)}
                  </strong>
                  <span className="units">
                    <a href="/">°C</a> | <a href="/">°F</a> <br />
                  </span>
                  <div>Feels like: {Math.round(weather.feelsLike)}°C</div>
                  <span> Humidity: {weather.humidity}%</span>
                  <br />
                  <span>Wind: {Math.round(weather.wind)} km/h</span>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
