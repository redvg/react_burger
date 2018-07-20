import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>some react app</h1>
        <Person />
        <Person />
      </div>
    );
  }
}

export default App;
