import React,{useState} from 'react'
//note, for styling the material-ui library was leveraged
import { Button } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    btn:{
        backgroundColor:'#34eb43',
        color:"#fff"
    }
})

function HookCounterTwo() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)
    const classes = useStyles()
    //acesses the previous state to increment the value by 5
    const incrementFive = ()=> {
        for(let i=0; i<5; i++){
            setCount(prevCount => prevCount + 1 )
        }
    }
    return (
        <div>
            Count: {count}
            <Button variant="outlined" color="primary"
            onClick={()=> setCount(initialCount)}>Reset</Button>
            <Button   className={classes.btn}
            onClick={()=> setCount(prevCount=> prevCount + 1)}>Increment</Button>
            <Button variant="outlined" color="secondary"
            onClick={()=> setCount(prevCount=> prevCount -1)}>Decrement</Button>
            <Button onClick={incrementFive}>Increment 5</Button>
        </div>
    )
}

export default HookCounterTwo
