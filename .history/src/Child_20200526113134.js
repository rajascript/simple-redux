import React from "react";
import { connect } from "react-redux";

class Child extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>I am the Child component</h1>
        <p>Cart has {this.props.cartData.itemCount} Items</p>

        <button onClick={() => this.props.increaseCount(1)}>+</button>
        <button onClick={() => this.props.decreaseCount(1)}>-</button>
      </div>
    );
  }
}
const mapkardo = function (gilobalishtate) {
  return gilobalishtate;
};

export default connect(mapkardo)(Child);
