import { useEffect, useState } from 'react';
import axios from 'axios';

import WeatherForcastDay from './WeatherForcastDay';
import { ThreeCircles } from 'react-loader-spinner';

export default function WeatherForcast(props) {
	let [loaded, setLoaded] = useState(false);
	let [forcast, setForcast] = useState(null);

	useEffect(() => {
		setLoaded(false);
	}, [props.city]);

	function showForcast(response) {
		setForcast(response.data.daily);
		setLoaded(true);
	}

	if (loaded) {
		return (
			<div className='row weather-days' id='forcast'>
				{forcast.map((day, index) => {
					if (index < 6) {
						return (
							<div className='col days' key={index}>
								<WeatherForcastDay data={day} />
							</div>
						);
					} else {
						return null;
					}
				})}
			</div>
		);
	} else {
		const apiKey = 'ff63602b5ab4ddad021a4od399t4f1d1';
		let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;

		axios.get(apiUrl).then(showForcast);

		return (
			<div className='spinner-wrapper'>
				<div className='spinner'>
					<ThreeCircles
						height='80'
						width='80'
						color='#2c67c0'
						wrapperStyle={{}}
						wrapperClass=''
						visible={true}
						ariaLabel='three-circles-rotating'
						outerCircleColor=''
						innerCircleColor=''
						middleCircleColor=''
					/>
				</div>
			</div>
		);
	}
}
