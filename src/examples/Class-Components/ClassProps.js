import React, { Component } from 'react';
import Bike from './Bike';

class ClassProps extends Component {
  render() {
    return (
      <div>
        <h1> Props in Class Components</h1>
        <Bike brand="Royal Enfield" color="Black" />
        <Bike brand="Kawasaki" color="Green" />
        <Bike brand="RX 100" color="Red" />
      </div>
    );
  }
}

export default ClassProps;
