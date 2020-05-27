import React from "react";

class Child extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>I am the Child component</h1>
        <p>Cart has {this.props.cartData.itemCount} Items</p>
        <button
          onClick={() => this.setState({ elements: this.state.elements + 1 })}
        >
          +
        </button>
        <button
          onClick={() => this.setState({ elements: this.state.elements - 1 })}
        >
          -
        </button>
      </div>
    );
  }
}

export default Child;

export const name = "Raja";
