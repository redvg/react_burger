import React from 'react';

const person = (props) => <p onClick={props.clickHandler}>I am {props.name} person who is {props.age} years old {props.children}</p>;

export default person;
