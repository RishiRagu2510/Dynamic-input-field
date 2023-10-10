import React, { useState } from 'react'

const DynamicInputField = () => {
    const[inp1,setinp1]=useState('');
    return(
        <div>
            <h1>Dynamic Input</h1>   
            <label>
                Enter your name: <input type="text" onChange={e=>setinp1(e.target.value)}/><br></br>   
            </label>
            
            <button onClick={()=>{setinp1('');}}>Reset</button>
            <p>{inp1}</p>
        
        </div>
    )
}

export default DynamicInputField