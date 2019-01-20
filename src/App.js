import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      random: null
    };
  }

  handleClick = () => {
    this.setState({ random: Math.floor(Math.random() * 10) + 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click me</button>
        {this.state.random}
      </div>
    );
  }
}

export default App;
