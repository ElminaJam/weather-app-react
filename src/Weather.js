import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.city);

  function displayWeather(response) {
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
      city: response.data.name,
    });
  }

  function search() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=27fb2f753cffa772c159b13a29aaa34d&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-7">
            <form className="search-form" onSubmit={handleSubmit}>
              <div className="input-icon">
                <button className="search-icon">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
                <input
                  className="search-form shadow-sm"
                  type="text"
                  autoComplete="off"
                  autoFocus="on"
                  placeholder="search city..."
                  onChange={updateCity}
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
        <WeatherInfo data={weather} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
