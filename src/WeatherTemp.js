import React, { useState } from 'react';
import { unitTemp } from './Weather';

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState('celsius');

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit('fahrenheit');
    unitTemp.unit = 'imperial';
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit('celsius');
    unitTemp.unit = 'metric';
  }

  if (unit === 'celsius') {
    return (
      <div>
        <span id="temperature">{Math.round(props.celsius)}</span>
        <span>
          {' '}
          <b>°C</b>
        </span>{' '}
        |
        <span>
          <a href="/" onClick={convertToFahrenheit}>
            {' '}
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;

    return (
      <div>
        <span id="temperature">{Math.round(fahrenheit)}</span>
        <span>
          {' '}
          <a href="/" onClick={convertToCelsius}>
            °C
          </a>
        </span>{' '}
        |
        <span>
          {' '}
          <b>°F</b>
        </span>
      </div>
    );
  }
}
