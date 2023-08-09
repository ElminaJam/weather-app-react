import React from "react";

export default function WeatherTemperature(props) {
  function convertToFahrenheit(event) {
    event.preventDefault();
    props.setUnits("fahrenheit");
  }

  function convertToCelcius(event) {
    event.preventDefault();
    props.setUnits("celcius");
  }

  if (props.units === "celcius") {
    return (
      <div>
        <strong className="temperature">{Math.round(props.celsius)}</strong>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={convertToFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <strong className="temperature">
          {Math.round((props.celsius * 9) / 5 + 32)}
        </strong>
        <span className="unit">
          <a href="/" onClick={convertToCelcius}>
            °C
          </a>{" "}
          |°F
        </span>
      </div>
    );
  }
}
