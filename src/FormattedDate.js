export default function FormattedDate({ date }) {
	let currentHour = date.getHours();

	if (currentHour < 10) {
		currentHour = `0${currentHour}`;
	}

	let currentMinutes = date.getMinutes();

	if (currentMinutes < 10) {
		currentMinutes = `0${currentMinutes}`;
	}

	let days = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];
	let currentDay = days[date.getDay()];

	return (
		<div>
			{currentDay} {currentHour}:{currentMinutes}
		</div>
	);
}
