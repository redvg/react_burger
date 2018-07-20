import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>some react app</h1>
        <Person name='A' age='1' />
        <Person name='b' age='2'> <p>cool!</p> </Person>
        <Person name='c' age='3'/>
      </div>
    );
  }
}

export default App;
