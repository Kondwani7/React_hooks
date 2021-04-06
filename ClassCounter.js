import React, { Component } from 'react'
import { Button } from '@material-ui/core'

class ClassCounter extends Component {
    constructor(props){
        super(props)

        this.state = {
            count: 0
        }
    }

    incrementCount = ()=>{
        this.setState({
            count: this.state.count + 1
        })
    }
    
    render() {
        return (
            <div>
                <Button variant="contained" color="primary"
                 onClick={this.incrementCount}>Class count: {this.state.count}</Button>
            </div>
        )
    }
}

export default ClassCounter
