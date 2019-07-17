import React, { Component }  from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import { SUN } from '../../constants/weather';



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

    handleUpdateClick() {
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