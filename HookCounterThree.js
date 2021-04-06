import React, { useState } from 'react'

function HookCounterThree() {
    const [name, setName] = useState({firstName:'', LastName:''})
    return (        
        <div>
            <form>
                <label>First name</label>
                <input
                    type="text"
                    value={name.firstName}
                    onChange={e=>setName({...name, firstName:e.target.value})}
                    />
                <label>Last name</label>
                <input 
                    type="text"
                    value={name.LastName}
                    onChange={e=> setName({...name, LastName:e.target.value})}
                    />           
                <h2>Your first name is - {name.firstName}</h2>
                <h2>Your Last name is - {name.LastName}</h2>
                
            </form>
        </div>
    )
}

export default HookCounterThree

