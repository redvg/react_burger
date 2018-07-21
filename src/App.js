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

    counter: 0,

    counterSource: '',

    typedText: '',

    isShowPersons: true,

    isShowAnotherPersons: true
  }

  buttonClickHandler = (counterSource) => {

    this.setState({
      
      counter: this.state.counter + 1, counterSource: counterSource
    });
  }

  typedTextHandler = (event) => {

    this.setState({
      
      typedText: event.target.value,
      
      persons: [

        {name: 'a', age: 1},
  
        {name: 'b', age: 2},
  
        {name: event.target.value, age: 3}
      ]
    });
  }

  toggleShowPersonsHandler = () => {

    this.setState({isShowPersons: !this.state.isShowPersons});
  }

  toggleShowAnotherPersonsHandler = () => {

    this.setState({isShowAnotherPersons: !this.state.isShowAnotherPersons});
  }

  deletePersonHandler = (index) => {

    const p = this.state.persons;
    p.splice(index, 1);
    this.setState({persons: p});
  }

  renderPersons(){

    return(
      <div>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          clickHandler={(event) => this.buttonClickHandler('component, arrow func')}> 
          cool! 
        </Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          clickHandler={this.buttonClickHandler.bind(this, 'component, bind')}> 
          cool!
        </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} 
          typedTextHandler={this.typedTextHandler}/>
    </div>
    );
  }

  renderPersonsAsList = () => 
   <div> 
    {this.state.persons.map((el, i) => <Person name={el.name} age={el.age} clickHandler={this.deletePersonHandler.bind(this, i)}  />)}
   </div>

  render() {

    let anotherPersons = this.state.isShowAnotherPersons ? null : <div>another person goes here</div>

    return (
      <div className="App">
        <h1>some react app</h1>
        <button onClick={() => this.buttonClickHandler('button, arrow func')}>click</button>
        <p>{this.state.counter}</p>
        <p>{this.state.counterSource}</p>
        <p>{this.state.typedText}</p>
        <button onClick={this.toggleShowPersonsHandler.bind(this)}>show persons</button>
        <button onClick={this.toggleShowAnotherPersonsHandler.bind(this)}>show another persons</button>
        {this.state.isShowPersons ? this.renderPersonsAsList() : null}
        {anotherPersons}
      </div>
    );
  }
}

export default App;
