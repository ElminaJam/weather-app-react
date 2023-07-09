import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div>
      <strong className="temperature">{Math.round(props.celsius)}</strong>
      <span className="unit">°C</span>
    </div>
  );
}
