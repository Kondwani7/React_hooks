import React, {useState, useEffect} from 'react'

function HookMouseEfect() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition= e=>{
        console.log('Mouse position event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log('useEffect called')
        window.addEventListener('mouseover', logMousePosition)

        return()=>{
            console.log('component umounted')
            window.removeEventListener(logMousePosition)
        }
    },[])

    return (
        <div>
            Hooks X - {x} Y - {y}
        </div>
    )
}

export default HookMouseEfect
