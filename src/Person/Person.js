import React from 'react';
import './Person.css';

const style = {
    border: '1px solid',
    backgroundColor: 'yellow'
}

const person = (props) => 
    <div className='Person'> 
        <p>I am {props.name} person who is {props.age} years old</p>
        <p onClick={props.clickHandler}>{props.children}</p>
        <input type="text" onChange={props.typedTextHandler} value={props.name} style={style}/>
    </div>    

export default person;
