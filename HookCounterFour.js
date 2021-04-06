import React, {useState} from 'react'
import { Button } from '@material-ui/core'

function HookCounterFour() {
    const [items, setItems] = useState([])
    const addItem = ()=>{
        setItems([...items, {
            id:items.length,
            //the new item to the list will be value between 1-20, appended to a copy of the new object
            value: Math.floor(Math.random() *20) + 1
        }])
    }
    return (
        <div>
            <Button variant="contained" onClick={addItem}>Add a number</Button>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.value}</li>
                ))}
            </ul>
        </div>
    )
}

export default HookCounterFour
