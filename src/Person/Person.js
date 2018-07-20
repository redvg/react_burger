import React from 'react';

const person = (props) => 
    <div> 
        <p>I am {props.name} person who is {props.age} years old</p>
        <p onClick={props.clickHandler}>{props.children}</p>
        <input type="text" onChange={props.typedTextHandler} value={props.name}/>
    </div>    

export default person;
