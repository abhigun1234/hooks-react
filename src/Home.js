import React, { useState } from 'react';

function Home(props) {
    const [personArr,setName]=useState([{name:'abhishek'},
    {name:'ravi'},{name:'kavi'}])
     function clearArr(){



     }

     function  changeName(){

       setName( personArr[2].name='manoj')
     }
    return (
        <div>
            
        
            { personArr.map((person)=>{
             return <h1> {person.name} </h1>
        
            })}
            <button onClick={changeName}>Ok</button>
        </div>
    );
}

export default Home;