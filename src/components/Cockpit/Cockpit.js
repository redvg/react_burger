import React from 'react';
import './Cockpit.css';

const cockpit = (props) => {

    const styleOfButton = {
        backgroundColor: props.isShowPersons ? 'green' : 'red',
        color: 'white',
        cursor: 'pointer'
      }
  
      const mainTextClass = [];
  
      if (props.persons.length < 2){
  
        mainTextClass.push('redColor');
      }
  
      if (props.persons.length < 1){
  
        mainTextClass.push('italicFont');
      }
    
    return (
        <div className="Cockpit">
            <h1 className={mainTextClass.join(' ')}>
                some react app
            </h1>
            <button onClick={() => props.buttonClickHandler('button, arrow func')}>
                click
            </button>
            <p>{props.counter}</p>
            <p>{props.counterSource}</p>
            <p>{props.typedText}</p>
            <button onClick={props.toggleShowPersonsHandler} 
                    style={styleOfButton}>
                show persons
            </button>
        </div>
    );
}


export default cockpit;