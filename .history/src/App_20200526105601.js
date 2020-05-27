import React from "react";
import MyChildComp from "./Child";

import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>I am the parent component</h1>Cart has{" "}
        {this.props.cardData.itemCount} Items
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
        <MyChildComp item={this.state.elements} />
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
