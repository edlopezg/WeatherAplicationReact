import React from 'react'
import Form from './Form';
import { useState } from 'react';
import PrincipalCard from './PrincipalCard';


const WeatherCard = () => {
let urlWeather = 'https://api.openweathermap.org/data/2.5/weather?appid=3f66e94eb6fe4f33c0491993ccd604cb&lang=sp'
let cityUrl = '&q='
let urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?appid=3f66e94eb6fe4f33c0491993ccd604cb&lang=sp'

const [weather, setweather] = useState([])
const [forecast, setForectast] = useState([])
const [loading, setloading] = useState(false)
const [show, setshow] = useState(false)
const [location, setlocation] = useState('')

//funcion para hacer la llamada a la API

const getLocation = async (loc) => {
    // Aqui controlamos que se visualice el spiiner de carga 
    setloading(true);
    setlocation(loc);

    //weather

    urlWeather = urlWeather + cityUrl + loc;

    await fetch(urlWeather).then((response) => {
        if (!response.ok) throw {response}
        return response.json();
    }).then((weatherData) => {
        setweather(weatherData);
    }).catch(error => {
        console.log(error);
        setloading(false);
        setshow(false);
    });
    //forecast del clima 

        

    urlForecast = urlForecast + cityUrl + loc;

    await fetch(urlForecast).then((response) => {
        if (!response.ok) throw {response}
        return response.json();
    }).then((forecastData) => {
         console.log(forecastData);
        setForectast(forecastData);
           setloading(false)
            setshow(true)
            

    }).catch(error => {
        console.log(error);
        setloading(false);
        setshow(false);
    });

        

}

  return (
    <div>
<React.Fragment>
    <Form
    newLocation = {getLocation}
    />
    <PrincipalCard  
    showData = {show}
    loadingData = {loading}
    weather = {weather} 
    forecast = {forecast}
    location = {location}/>
</React.Fragment>

    </div>
  )
}

export default WeatherCard;