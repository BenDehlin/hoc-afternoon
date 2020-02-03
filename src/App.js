import React, { Component } from 'react';
import './App.css';
import CurrencyDisplay from './Components/CurrencyConverter'

class App extends Component {
  render() {
    return (
      <div>
        <>
        <h2>Higher Order Component</h2>
        <CurrencyDisplay />
        </>
      </div>
    );
  }
}

export default App;
