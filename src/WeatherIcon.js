export default function WeatherIcon({ dataIcon }) {
	const icon = `/images/${dataIcon.icon}.png`;

	return (
		<div>
			<img src={icon} alt={dataIcon.description} />
		</div>
	);
}
