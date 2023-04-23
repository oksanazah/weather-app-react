import { useContext } from 'react';

import { CurrentUnitContext } from './App';

export default function WeatherTemp({ celsius }) {
	const { currentUnit, setCurrentUnit } = useContext(CurrentUnitContext);

	function convertToFahrenheit(event) {
		event.preventDefault();
		setCurrentUnit('fahrenheit');
	}

	function convertToCelsius(event) {
		event.preventDefault();
		setCurrentUnit('celsius');
	}

	if (currentUnit === 'celsius') {
		return (
			<div>
				<span id='temperature'>{Math.round(celsius)}</span>
				<span>
					{' '}
					<b>°C</b>
				</span>{' '}
				|
				<span>
					<a href='/' onClick={convertToFahrenheit}>
						{' '}
						°F
					</a>
				</span>
			</div>
		);
	} else {
		const fahrenheit = (celsius * 9) / 5 + 32;

		return (
			<div>
				<span id='temperature'>{Math.round(fahrenheit)}</span>
				<span>
					{' '}
					<a href='/' onClick={convertToCelsius}>
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
