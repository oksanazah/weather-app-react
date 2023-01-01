import React from 'react';
import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="top-search">
          <h1>Weather App</h1>
        </div>

        <Weather defaultCity="London" />

        <div className="link">
          <a href="https://github.com/oksanazah/weather-app-react">Open-source code</a>, by Oksana
          Zakharchenko
        </div>
      </div>
    </div>
  );
}

export default App;
