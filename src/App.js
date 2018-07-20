import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';


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

    username: 'Bob'
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

  changeUsernameHandler = (event) => {
 
    this.setState({username: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <h1>assignment</h1>        
        <UserInput changeUsername={this.changeUsernameHandler} username={this.state.username}/>
        <UserOutput username='Alice' />
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
