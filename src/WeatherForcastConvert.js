import { useContext } from 'react';

import { CurrentUnitContext } from './App';

export default function WeatherForcastConvert({ celsiusMax, celsiusMin }) {
	const { currentUnit } = useContext(CurrentUnitContext);

	const convert = (temp) =>
		currentUnit === 'celsius' ? temp : (temp * 9) / 5 + 32;

	return (
		<div>
			<span>{Math.round(convert(celsiusMax))}°</span>
			<span id='night'> {Math.round(convert(celsiusMin))}°</span>
		</div>
	);
}
