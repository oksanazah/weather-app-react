import FormattedDate from './FormattedDate';
import WeatherTemp from './WeatherTemp';

export default function WeatherInfo({ data }) {
	const { icon, description, temp, humidity, wind, city, date } = data;

	return (
		<div className='row main-row'>
			<div className='col-3' id='image'>
				<img src={icon} alt={description} id='image-icon' />
			</div>
			<div className='col-3'>
				<div className='main-temp'>
					<WeatherTemp celsius={temp} />
				</div>
			</div>
			<div className='col-2'>
				<div className='secondary-text'>
					Humidity: <span id='humidity'>{humidity}</span>%
				</div>
				<div className='secondary-text'>
					Wind: <span id='wind'>{Math.round(wind)}</span> km/h
				</div>
			</div>
			<div className='col-4'>
				<div className='last-col'>
					<div className='city' id='current-city'>
						{city}
					</div>
					<div className='secondary-text' id='current-day'>
						<FormattedDate date={date} />
					</div>
					<div className='secondary-text' id='weather'>
						{description}
					</div>
				</div>
			</div>
		</div>
	);
}
