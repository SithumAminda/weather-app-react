// import React, { useEffect,useState,useRef,inputRef } from 'react'
// import './Weather.css'
// import search_icon from '../assets/search.png'
// import clear from '../assets/clear.png'
// import cloud from '../assets/cloud.png'
// import drizzle from '../assets/drizzle.png'
// import humidity from '../assets/humidity.png'
// import rain from '../assets/rain.png'
// import snow from '../assets/snow.png'
// import wind from '../assets/wind.png'

// const Weather=()=> {
//   inputRef=useRef();
//     const [weatherData, setWeatherData]=useState(false);
    
    
//     const allIcons={
//         "01d":clear,
//         "01n":clear,
//         "02d":cloud,
//         "02n":cloud,
//         "03d":cloud,
//         "03n":cloud,
//         "04d":drizzle,
//         "04n":drizzle,
//         "09d":rain,
//         "09n":rain,
//         "10d":rain,
//         "10n":rain,
//         "13d":snow,
//         "13n":snow,
        
        
//     }

//     const search= async (city) => {
//         try {
//           const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_APP_ID}`;
//             console.log(url)
//             const response=await fetch(url);
//             const data=await response.json();
//             console.log(data)
//             const icon =allIcons[data.weather[0].icon] || clear;
           
//             setWeatherData({
//                 humidity: data.main.humidity,
//                 windSpeed: data.wind.speed,
//                 tempature:Math.floor(data.main.temp),
//                 location: data.name,
//                 icon:icon
               


//             })
        
//     }catch (error) {
//     }}
//       useEffect(() => {
//         search("Colombo")}, [])
//   return (
//     <div className='weather'>
//      <div className='search-bar'>
//         <input ref={inputRef} type="text" placeholder='Search...' />
//         <img src={search_icon} alt="" onClick = {()=>search(inputRef.current.value)}/>
//         </div>
//         <img src={weatherData.icon} alt="" className='weather-icon'/>
//         <p className='temperature'>{weatherData.tempature}</p>
//         <p className='location'>{weatherData.location}</p>
//         <div className='weather-data'>
//         <div className='col'>
//             <img src={humidity} alt=""/>
//             <div>
//             <p>{weatherData.humidity}</p> 
//             <span>Humidity</span> 
//             </div>
//             </div> 
//             <div className='col'>
//             <img src={wind} alt=""/>
//             <div>
//             <p>{weatherData.windSpeed}</p> 
//             <span>wind Speed</span> 
//             </div>
//             </div> 
//         </div>
//     </div>
//   )
// }

// export default Weather








import React, { useEffect, useState, useRef } from 'react';
import './Weather.css';
import search_icon from '../assets/search.png';
import clear from '../assets/clear.png';
import cloud from '../assets/cloud.png';
import drizzle from '../assets/drizzle.png';
import humidity from '../assets/humidity.png';
import rain from '../assets/rain.png';
import snow from '../assets/snow.png';
import wind from '../assets/wind.png';

const Weather = () => {
  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState(false);

  const allIcons = {
    "01d": clear,
    "01n": clear,
    "02d": cloud,
    "02n": cloud,
    "03d": cloud,
    "03n": cloud,
    "04d": drizzle,
    "04n": drizzle,
    "09d": rain,
    "09n": rain,
    "10d": rain,
    "10n": rain,
    "13d": snow,
    "13n": snow,
  };

  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_APP_ID}`;
      const response = await fetch(url);
      const data = await response.json();
      const icon = allIcons[data.weather[0].icon] || clear;

      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        tempature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      });
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    search("Colombo");
  }, []);

  return (
    <div className='weather'>
      <div className='search-bar'>
        <input ref={inputRef} type="text" placeholder='Search...' />
        <img src={search_icon} alt="" onClick={() => search(inputRef.current.value)} />
      </div>
      {weatherData && (
        <>
          <img src={weatherData.icon} alt="" className='weather-icon' />
          <p className='temperature'>{weatherData.tempature}°C</p>
          <p className='location'>{weatherData.location}</p>
          <div className='weather-data'>
            <div className='col'>
              <img src={humidity} alt="Humidity" />
              <div>
                <p>{weatherData.humidity}%</p>
                <span>Humidity</span>
              </div>
            </div>
            <div className='col'>
              <img src={wind} alt="Wind Speed" />
              <div>
                <p>{weatherData.windSpeed} m/s</p>
                <span>Wind Speed</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Weather;
