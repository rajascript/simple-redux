import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  constructor(props) {
    super(props)
  
    this.state={
      elements:1
    }
  }
  

  return (
    <div className="App">
      <h1>I am the parent component</h1>
      I have {this.state.elements} elements
      <button onClick={()=>this.setState({elements:this.state.elements+1})}>+</button>
      <button onClick={()=>this.setState({elements:this.state.elements-1})}>-</button>
    </div>
  );
}

export default App;
