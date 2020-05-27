import React from "react";
import MyChildComp from "./Child";
import { name } from "./Child";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { elements: 1 };
  }

  render() {
    return (
      <div className="App">
        <h1>I am the parent component</h1>Cart has {this.state.elements} Items,{" "}
        {name}
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

export default App;
