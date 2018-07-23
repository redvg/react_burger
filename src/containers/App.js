import React, { Component } from 'react';
import shortid from "short-id";
import './App.css';
import Persons from '../components/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {

  state = {

    persons: [

      {id: shortid.generate(), name: 'a', age: 1},

      {id: shortid.generate(), name: 'b', age: 2},

      {id: shortid.generate(), name: 'c', age: 3}
    ],

    counter: 0,

    counterSource: '',

    typedText: '',

    isShowPersons: true
  }

  buttonClickHandler = (counterSource) => {

    this.setState({
      
      counter: this.state.counter + 1, counterSource: counterSource
    });
  }

  typedTextHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => p.id === id);

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  toggleShowPersonsHandler = () => {

    this.setState({isShowPersons: !this.state.isShowPersons});
  }

  deletePersonHandler = (index) => {

    const p = [...this.state.persons];
    
    p.splice(index, 1);
    
    this.setState({persons: p});
  }

  render() {

    return (
      <div className="App">
        <Cockpit isShowPersons={this.state.isShowPersons} 
                 persons={this.state.persons}
                 buttonClickHandler={this.buttonClickHandler}       
                 counter={this.state.counter}
                 counterSource={this.state.counterSource}
                 typedText={this.state.typedText}
                 toggleShowPersonsHandler={this.toggleShowPersonsHandler}
        />
        {this.state.isShowPersons ? 
          <Persons persons={this.state.persons} 
                   clickHandler={this.deletePersonHandler} 
                   changedHandler={this.typedTextHandler} 
          /> : 
          null
        }
      </div>
    );
  }
}

export default App;
