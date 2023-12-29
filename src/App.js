import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState(''); 
    // eslint-disable-next-line
    const [apiKey, setApiKey] = useState('0f3975842fe34e8fa8563902232912');
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
          );
          console.log(response);
          setWeatherData(response.data);
        } catch (error) {
          console.error('Error fetching weather data:', error);
        }
      };
  
      fetchData();
    }, [apiKey, city]);
  
    return (
      <div>
        <h1>Weather App</h1>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        {weatherData && (
          <div>
            <h2>{weatherData.location.name}, {weatherData.location.country}</h2>
            <p>Temperature: {weatherData.current.temp_c}°C</p>
            <p>Condition: {weatherData.current.condition.text}</p>
          </div>
        )}
      </div>
    );
  };


export default App;
