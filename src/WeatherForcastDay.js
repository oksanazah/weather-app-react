import React from 'react';
import WeatherIcon from './WeatherIcon';
import WeatherForcastConvert from './WeatherForcastConvert';

export default function WeatherForcastDay(props) {
  function showWeekDay(timestamp) {
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let date = new Date(timestamp * 1000);
    let day = date.getDay();
    return days[day];
  }

  return (
    <div>
      <div>{showWeekDay(props.data.time)}</div>
      <WeatherIcon dataIcon={props.data.condition} />
      <div>
        <WeatherForcastConvert
          celsiusMax={props.data.temperature.maximum}
          celsiusMin={props.data.temperature.minimum}
        />
      </div>
    </div>
  );
}
