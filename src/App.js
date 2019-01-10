import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="right">
        <p>RIGHT ANSWER </p>
        </div>
        <div className="wrong">
        <p>Wrong Answer </p>
        </div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num, i) => {
          return {
            key={i}
            onClick={() => this.guessNumber(num)}
            className="num-box"
            >
            <p>(num)</p>
          }
        })}
      </div>
    );
  }
}

export default App;
