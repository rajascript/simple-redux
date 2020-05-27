import React from "react";
import MyChildComp from "./Child";

import { connect } from "react-redux";

class App extends React.Component {
  render() {
    console.log(this.props);
    if (!this.props.cardData) {
      return <h3>Loading...</h3>;
    } else {
      return (
        <div className="App">
          <h1>I am the parent component</h1>
          {this.props.cardData && (
            <p>Cart has {this.props.cardData.itemCount} Items</p>
          )}
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
          <MyChildComp />
        </div>
      );
    }
  }
}

function mapGloabalStateToProps(globalState) {
  return globalState;
}

const propsSeAttatchKrnewlafunc = connect(mapGloabalStateToProps); //returning function that adds props to a component

const connectedComponent = propsSeAttatchKrnewlafunc(App);

//export default connectedComponent;

export default connect(mapGloabalStateToProps)(App);
