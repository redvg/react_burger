import React from 'react';
import Person from './Person/Person';


const persons = (props) => 
    <div> 
        {props.persons.map((el, i) => 
            <Person
                key={el.id}        
                name={el.name} 
                age={el.age} 
                clickHandler={() => props.clickHandler(i)} 
                changedHandler={(event) => props.changedHandler(event, el.id)}
            />
            )
        }      
   </div>

export default persons;