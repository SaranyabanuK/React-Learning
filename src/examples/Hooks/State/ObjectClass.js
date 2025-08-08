import React, { Component } from "react";

class UpdateObjectClass extends Component {
  constructor(props) {
    super(props);
    this.state = { user: { name: "Buttercup", city: "Jaffna" } };
  }

  changeCity = () => {
    this.setState(prev => ({ user: { ...prev.user, city: "Colombo" } }));
  };

  render() {
    return (
      <>
        <h1> Updating Object in Class Component</h1>
        <p>Name: {this.state.user.name}</p>
        <p>City: {this.state.user.city}</p>
        <button onClick={this.changeCity}>Change City</button>
      </>
    );
  }
}

export default UpdateObjectClass;
