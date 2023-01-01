import React from 'react';

export default function FormattedDate(props) {
  let currentHour = props.date.getHours();

  if (currentHour < 10) {
    currentHour = `0${currentHour}`;
  }

  let currentMinutes = props.date.getMinutes();

  if (currentMinutes < 10) {
    currentMinutes = `0${currentMinutes}`;
  }

  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let currentDay = days[props.date.getDay()];

  return (
    <div>
      {currentDay} {currentHour}:{currentMinutes}
    </div>
  );
}
