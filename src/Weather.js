import React, { useState } from 'react';
import axios from 'axios';
import WeatherInfo from './WeatherInfo';
import './Weather.css';

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeather({
      ready: true,
      city: response.data.name,
      temp: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].main,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      icon: `/images/${response.data.weather[0].icon}.png`
    });
  }

  function searchCity() {
    const apiKey = 'a5ab1c192d0abb8931f254cb8480b7bd';
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function searchLocation(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;

    let apiKey = 'a5ab1c192d0abb8931f254cb8480b7bd';
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  function myLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <div className="main shadow bg-body rounded">
          <form className="form-city" id="form-city" onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control"
              id="enter-city"
              placeholder="Enter a city"
              onChange={handleCityChange}
            />
            <input type="submit" className="button shadow" value="Search" />
            <input
              type="button"
              className="button shadow"
              id="current-button"
              value="My location"
              onClick={myLocation}
            />
          </form>
          <WeatherInfo data={weather} />
        </div>
      </div>
    );
  } else {
    searchCity();
    return 'Loading...';
  }
}
