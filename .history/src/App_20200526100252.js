import React from "react";
import "./App.css";

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
        <h1>I am the parent component</h1>I have {this.state.elements} elements
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

export default App;
