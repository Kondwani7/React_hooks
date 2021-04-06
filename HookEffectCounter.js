import { Button } from '@material-ui/core'
import React,{useState, useEffect} from 'react'

function HookEffectCounter() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(()=>{
        console.log('useEffect- Updating title')
        document.title = `Clicked ${count} times`
    }, [count])
    return (
        <div>
            <input 
                type="text"
                value={name}
                onChange={e=> setName(e.target.value)}
            />
            <span> </span>
            <Button variant="contained" color="primary"
            onClick={()=> setCount(prevCount=> prevCount + 1)}>Hook Count:{count}</Button>
        </div>
    )
}

export default HookEffectCounter
