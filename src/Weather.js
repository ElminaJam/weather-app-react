import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.city);
  const [error, setError] = useState(null);

  function displayWeather(response) {
    setError(null);
    setWeather({
      ready: true,
      date: new Date(response.data.time * 1000),
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.current,
      feelsLike: response.data.temperature.feels_like,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      icon: response.data.condition.icon_url,
      description: response.data.condition.description,
      city: response.data.city,
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
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=231802987t6b86727b0cd8a49eao449f&units=metric`;
    axios.get(apiUrl).then(displayWeather).catch(handleError);
  }
  function searchLocation(position) {
    let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${position.coords.longitude}&lat=${position.coords.latitude}&key=231802987t6b86727b0cd8a49eao449f&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-7">
            <form className="search-form" onSubmit={handleSubmit}>
              <div className="input-icon">
                <button className="search-icon">
                  <i
                    className="fa-solid fa-magnifying-glass"
                    title="Type a city"
                  ></i>
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
          <div className="col-5 text-end">
            <button
              className="location-button"
              onClick={getCurrentLocation}
              title="Your Location"
            >
              <i className="fa-solid fa-location-dot"></i>
              Current location
            </button>
          </div>
        </div>
        <WeatherInfo data={weather} />
        <WeatherForecast coordinates={weather.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
