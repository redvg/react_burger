import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import shortid from "short-id";


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

    isShowPersons: true,

    isShowAnotherPersons: true
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

  toggleShowAnotherPersonsHandler = () => {

    this.setState({isShowAnotherPersons: !this.state.isShowAnotherPersons});
  }

  deletePersonHandler = (index) => {

    const p = [...this.state.persons];
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
    {this.state.persons.map((el, i) => 
      <ErrorBoundary key={el.id}>
        <Person           
          name={el.name} 
          age={el.age} 
          clickHandler={this.deletePersonHandler.bind(this, i)} 
          changedHandler={(event) => this.typedTextHandler(event, el.id)}/>
      </ErrorBoundary>)}
   </div>

  render() {

    const styleOfButton = {
      backgroundColor: this.state.isShowPersons ? 'green' : 'red',
      color: 'white',
      cursor: 'pointer'
    }

    const styleOfAnotherButton = {
      backgroundColor: 'blue',
      color: 'white',
      cursor: 'pointer'
    }

    let anotherPersons = this.state.isShowAnotherPersons ? null : <div>another person goes here</div>

    if (this.state.isShowAnotherPersons){

      styleOfAnotherButton.backgroundColor = 'blue';
    }

    else{

      styleOfAnotherButton.backgroundColor = 'black';
    }

    const mainTextClass = [];

    if (this.state.persons.length < 2){

      mainTextClass.push('redColor');
    }

    if (this.state.persons.length < 1){

      mainTextClass.push('italicFont');
    }

    return (
      <div className="App">
        <h1 className={mainTextClass.join(' ')}>some react app</h1>
        <button onClick={() => this.buttonClickHandler('button, arrow func')}>click</button>
        <p>{this.state.counter}</p>
        <p>{this.state.counterSource}</p>
        <p>{this.state.typedText}</p>
        <button onClick={this.toggleShowPersonsHandler.bind(this)} style={styleOfButton}>show persons</button>
        <button onClick={this.toggleShowAnotherPersonsHandler.bind(this)} style={styleOfAnotherButton}>show another persons</button>
        {this.state.isShowPersons ? this.renderPersonsAsList() : null}
        {anotherPersons}
      </div>
    );
  }
}

export default App;
