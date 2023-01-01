import React from 'react';
import FormattedDate from './FormattedDate';
import WeatherTemp from './WeatherTemp';

export default function WeatherInfo(props) {
  return (
    <div className="row main-row">
      <div className="col-3" id="image">
        <img src={props.data.icon} alt={props.data.description} id="image-icon" />
      </div>
      <div className="col-3">
        <div className="main-temp">
          <WeatherTemp celsius={props.data.temp} />
        </div>
      </div>
      <div className="col-2">
        <div className="secondary-text">
          Humidity: <span id="humidity">{props.data.humidity}</span>%
        </div>
        <div className="secondary-text">
          Wind: <span id="wind">{Math.round(props.data.wind)}</span> km/h
        </div>
      </div>
      <div className="col-4">
        <div className="last-col">
          <div className="city" id="current-city">
            {props.data.city}
          </div>
          <div className="secondary-text" id="current-day">
            <FormattedDate date={props.data.date} />
          </div>
          <div className="secondary-text" id="weather">
            {props.data.description}
          </div>
        </div>
      </div>
    </div>
  );
}
