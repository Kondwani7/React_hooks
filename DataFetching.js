import React,{useState, useEffect} from 'react'
import axios from 'axios';
import InboxIcon from '@material-ui/icons/Inbox';
import {Button, List, ListItem, ListItemIcon, ListItemText, Typography} from '@material-ui/core'

function DataFetching() {
    const [comment,setComment] = useState([])
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    const handleClick = ()=>{
        setIdFromButtonClick(id)
    }

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/comments/${idFromButtonClick}`)
        .then(res=>{
            console.log(res)
            setComment(res.data)
        })
        .catch(err=>{
            console.log(err)
        },[idFromButtonClick])
    })

    return (
        <div>
        <Typography variant="h3">User comments</Typography>
            <input 
            type='text'
            value={id}
            onChange={e=>setId(e.target.value)}
            />
            <Button 
                variant="contained" color="primary"
                onClick={handleClick}
            >Fetch email</Button>
            <List>
                <ListItem>
                    <ListItemIcon>
                        <InboxIcon/>
                    </ListItemIcon>
                    <ListItemText primary={comment.email}/>
                </ListItem>
            </List>
        </div>
    )
}

export default DataFetching
