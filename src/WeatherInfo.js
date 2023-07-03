import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <header>
      <h1>{props.data.city}</h1>
      <div className="row">
        <div className="col main">
          <div className="icon">
            <img
              src={props.data.icon}
              alt={props.data.description}
              className="main mt-3 mb-3"
            />
            <div>{props.data.description}</div>
            <div>
              <FormattedDate date={props.data.date} />
            </div>
          </div>
        </div>
        <div className="col second">
          <div className="float-left">
            <div className="weather-info">
              {" "}
              <strong className="temperature">
                {Math.round(props.data.temperature)}
              </strong>
              <span className="units">
                <a href="/">°C</a> | <a href="/">°F</a> <br />
              </span>
              <div>Feels like: {Math.round(props.data.feelsLike)}°C</div>
              <div> Humidity: {props.data.humidity}%</div>
              <div>Wind: {Math.round(props.data.wind)} km/h</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
