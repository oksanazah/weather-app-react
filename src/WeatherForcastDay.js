import WeatherIcon from './WeatherIcon';
import WeatherForcastConvert from './WeatherForcastConvert';

export default function WeatherForcastDay({ data }) {
	const { time, condition, temperature } = data;

	function showWeekDay(timestamp) {
		let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
		let date = new Date(timestamp * 1000);
		let day = date.getDay();
		return days[day];
	}

	return (
		<div>
			<div>{showWeekDay(time)}</div>
			<WeatherIcon dataIcon={condition} />
			<div>
				<WeatherForcastConvert
					celsiusMax={temperature.maximum}
					celsiusMin={temperature.minimum}
				/>
			</div>
		</div>
	);
}
