import { Button } from '@material-ui/core'
import React,{useState} from 'react'
import HookMouseEfect from './HookMouseEfect'

function MouseContainer() {
    const [display, setDisplay] =useState(true)
    return (
        <div>
            <Button variant='contained' color='secondary'
            onClick={()=>setDisplay(!display)}>Toggle Display</Button>
            {display && <HookMouseEfect/>}
        </div>
    )
}

export default MouseContainer
