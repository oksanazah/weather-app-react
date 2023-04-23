import { useState, createContext } from 'react';

import './App.css';

import Weather from './Weather';

export const CurrentUnitContext = createContext('celsius');

function App() {
	const [currentUnit, setCurrentUnit] = useState('celsius');

	return (
		<CurrentUnitContext.Provider value={{ currentUnit, setCurrentUnit }}>
			<div className='App'>
				<div className='container'>
					<div className='top-search'>
						<h1>Weather App</h1>
					</div>

					<Weather defaultCity='London' />

					<div className='link'>
						<a href='https://github.com/oksanazah/weather-app-react'>
							Open-source code
						</a>
						, by Oksana Zakharchenko
					</div>
				</div>
			</div>
		</CurrentUnitContext.Provider>
	);
}

export default App;
