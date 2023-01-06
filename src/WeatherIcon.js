import React from 'react';

export default function WeatherIcon(props) {
  let icon = `/images/${props.dataIcon.icon}.png`;
  return (
    <div>
      <img src={icon} alt={props.dataIcon.description} />
    </div>
  );
}
