import React, { useState } from 'react';

function HooksObj(props) {
    const[perseonInfo,setAddress]=useState({mname:'enter name',address:''})
    // function changeAddress(e){
    //  setAddress({address:e.target.value})
    // }
    // function login(){
    //   console.log("perseonInfo.mname",perseonInfo.mname)
    //   console.log("perseonInfo.mname",perseonInfo.address)
    //  if(perseonInfo.mname==='abhi'&& perseonInfo.address==='pune')
    //  {
    //      alert("loged in ")
    //  }
    //  else{

    //     alert("fail")
    //  }
    // }
    
    return (
        <div class="container">   
            {/* <input  type='text' value={perseonInfo.mname} onChange={e=>setAddress({...perseonInfo,mname:e.target.value})}></input>
            <input  type='text' value={perseonInfo.address} onChange={e=>setAddress({...perseonInfo,address:e.target.value})}></input>
              {perseonInfo.mname}
              <p>--------------------</p>   
              {perseonInfo.address}    
            <button onClick={login}>login</button>                      */}
            
            <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

    <label for="country">Country</label>
    <select id="country" name="country">
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>

    <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>

    <input type="submit" value="Submit"></input>
        </div>
        
    );
}

export default HooksObj;