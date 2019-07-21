import React, { Component } from 'react';
import {Grid, Row, Col } from 'react-flexbox-grid';
import './App.css';
import LocationList from './components/LocationList';

const cities = [
  'Cali,co',
  'Washington,us',
  'Mexico,mx',
  'Bogota,co',
  'Madrid,es',
  'Lima,pe',
];

class App extends Component {
  handleSelectedLocation = city => {
    console.log(`App handleSelectedLocation ${city}`);
  }

  render(){
    return (
/*       <Grid fluid >
          <Row>
            <Col xs={12} sm={6} md={4}>
              <div className='red'></div>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <div className='green'></div>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <div className='blue'></div>
            </Col>
          </Row>
      </Grid> */

      <div className="App">
        <LocationList  
          cities={cities} 
          onSelectedLocation={this.handleSelectedLocation}
        />
      </div>
    );
  }
}

export default App;
