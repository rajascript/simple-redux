import React from "react";
import MyChildComp from "./Child";

import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>I am the parent component</h1>
        {this.props.cartData && (
          <p>Cart has {this.props.cartData.itemCount} Items</p>
        )}
        <button onClick={() => this.props.increaseCount(2)}>+</button>
        <button onClick={() => this.props.decreaseCount(2)}>-</button>
        <MyChildComp />
      </div>
    );
  }
}

function mapGloabalStateToProps(globalState) {
  return globalState;
}

const propsSeAttatchKrnewlafunc = connect(mapGloabalStateToProps); //returning function that adds props to a component

const connectedComponent = propsSeAttatchKrnewlafunc(App);

export default connectedComponent;
