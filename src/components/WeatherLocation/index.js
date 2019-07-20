import React, { Component }  from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import { SUN } from '../../constants/weather';
import convert from 'convert-units';

const location = "Cali,co";
const api_key = "0c7093ff41efbc5c5b38ba4095538094";
const url_base_weather ="https://api.openweathermap.org/data/2.5/weather";

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;

const data = {
    temperature: 31,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s',
}

class WeatherLocation extends Component {
    constructor () {
        super();
        this.state = {
            city: 'Cali',
            data: data,
        };
    }

    getTemp = kelvin => {
        return convert(kelvin).from('K').to('C');
    }
    
    getWeatherState = weather_data => {
        return SUN;
    }

    getData = weather_data => {
        const { humidity,temp} = weather_data.main;
        const { speed } = weather_data.wind;
        const weatherState = this.getWeatherState(weather_data);
        const temperature = this.getTemp(temp);

        const data = {
            humidity,
            temperature: temperature,
            weatherState,
            wind: `${speed} m/s`
        }
        return data;
    };

    handleUpdateClick = () => {
        fetch(api_weather).then(resolve => {
            return resolve.json();
        }).then(data => {
            const newWeather = this.getData(data);
            this.setState({
                data: newWeather
            });
        });
        console.log('Actualizado');
    }

    render () {
        const {city,data} = this.state;
        return (
            <div className="weatherLocationCont"> 
            <Location city={city}></Location>
            <WeatherData data={data}></WeatherData>
            <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }
};
    
export default WeatherLocation;