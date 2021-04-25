import React, { useState } from 'react';

function UseStateArr() {
  
    const [perseonInfo, setAddress] = useState([{ name: 'abhi', city: 'pune' },
    { name: 'ravi', city: 'jamnagar' }])
    return (
        <div>
            { perseonInfo.map((person)=>{
           return <h1> {person.name} {person.city}</h1>
        
            })}
        </div>
    );
}

export default UseStateArr;