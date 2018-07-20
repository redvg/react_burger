import React from 'react';
import './UserInput.css';

const userInput = (props) => 
    <div className='UserInput'>
        <input type="text" onChange={props.changeUsername} defaultValue={props.username}/>
    </div>    

export default userInput;