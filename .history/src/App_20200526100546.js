import React from "react";
import Child from "./Child";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      elements: 1,
    };
  }

  render() {
    return (
      <div className="App">
        <h1>I am the parent component</h1>Cart has {this.state.elements} Items
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
        <Child item={this.state.elements} />
      </div>
    );
  }
}

export default App;
