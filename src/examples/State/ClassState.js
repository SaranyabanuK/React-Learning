import React, { Component } from "react";

class ClassState extends Component {
  constructor(props) {
    super(props);
    
    this.state = { count: 0 };
  }

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1> State in Class Components</h1>
        <h2>Count: {this.state.count}</h2>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          ➕ Increment
        </button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          ➖ Decrement
        </button>
        <button onClick={() => this.setState({ count: 0 })}> Reset</button>
      </div>
    );
  }
}

export default ClassState;
