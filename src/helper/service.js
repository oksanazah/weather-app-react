export const getWeather = async (city) => {
	const apiKey = 'a5ab1c192d0abb8931f254cb8480b7bd';
	const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=metric`;

	const response = await fetch(apiUrl);
	const data = await response.json();

	return data;
};
