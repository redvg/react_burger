import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {

  state = {

    persons: [

      {name: 'a', age: 1},

      {name: 'b', age: 2},

      {name: 'c', age: 3}
    ],

    counter: 0
  }

  buttonClickHandler = () => {

    this.setState({counter: this.state.counter + 1});
  }

  render() {
    return (
      <div className="App">
        <h1>some react app</h1>
        <button onClick={this.buttonClickHandler}>click</button>
        <p>{this.state.counter}</p>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} > <p>cool!</p> </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
