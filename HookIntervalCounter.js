import { Typography } from '@material-ui/core'
import React,{useEffect, useState} from 'react'

function HookIntervalCounter() {
    const [count, setCount] = useState(0)

    const tick = ()=>{
         setCount(prevCount=> prevCount + 1)
    }

    useEffect(()=> {
        const interval = setInterval(tick, 1000)
        return () =>{
            clearInterval(interval)
        }
    },[count])

    return (
        <div>
            <Typography variant="h2"> Hook {count}</Typography>
        </div>
    )
}

export default HookIntervalCounter
