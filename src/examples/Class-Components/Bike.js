import React, { Component } from 'react';

class Bike extends Component {
  render() {
    return (
      <div>
        <h3> Bike Brand: {this.props.brand}</h3>
        <p>Color: {this.props.color}</p>
      </div>
    );
  }
}

export default Bike;
