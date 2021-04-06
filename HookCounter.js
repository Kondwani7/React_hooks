import React,{useState} from 'react'
import { Button } from '@material-ui/core'

function HookCounter() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <Button variant="contained" color="secondary"
             onClick={()=> setCount(count+ 1)}> Hook count: {count} </Button>
        </div>
    )
}

export default HookCounter
