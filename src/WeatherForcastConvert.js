import React from 'react';

export default function WeatherForcastConvert(props) {
  return (
    <div>
      <span>{Math.round(props.celsiusMax)}°</span>
      <span id="night"> {Math.round(props.celsiusMin)}°</span>
    </div>
  );
}
