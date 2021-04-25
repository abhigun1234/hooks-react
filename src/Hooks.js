import React, { useState } from 'react';

function Hooks(props) {
    const [name,changName]=useState('abhishek ghosh')
    return (
        <div>
            {name}
            <button onClick={()=>changName('ravi')}>Click</button>
        </div>
    );
}

export default Hooks;