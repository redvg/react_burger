import React from 'react';
import './UserOutput.css';

const userOutput = (props) => 
    <div className='UserOutput'> 
        <p>user name is {props.username}</p>
        <p>some text goes here</p>
    </div>    

export default userOutput;